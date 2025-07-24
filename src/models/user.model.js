const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const ERROR_MESSAGES = require('../constants/error.messages');
const REGEX_PATTERNS = require('../constants/regex.patterns');
const {hashPassword} = require('../utils/hash');
const Order = require('./order.model');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [2, 100],
                msg: ERROR_MESSAGES.NAME_LENGTH
            },
            is: {
                args: [REGEX_PATTERNS.NAME],
                msg: ERROR_MESSAGES.NAME_LETTERS_ONLY
            }
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            msg: ERROR_MESSAGES.EMAIL_IN_USE
        },
        validate: {
            isEmail: {
                msg: ERROR_MESSAGES.EMAIL_INVALID
            },
            notNull: {
                msg: ERROR_MESSAGES.EMAIL_REQUIRED
            }
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [8, 100],
                msg: ERROR_MESSAGES.PASSWORD_LENGTH
            },
            isStrongPassword(value) {
                if (!value.match(REGEX_PATTERNS.PASSWORD_STRONG)) {
                    throw new Error(ERROR_MESSAGES.PASSWORD_STRENGTH);
                }
            }
        },
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [10, 255],
                msg: ERROR_MESSAGES.ADDRESS_LENGTH
            }
        },
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            is: {
                args: [REGEX_PATTERNS.PHONE_INTERNATIONAL],
                msg: ERROR_MESSAGES.PHONE_FORMAT
            }
        },
    },
    role: {
        type: DataTypes.ENUM('customer', 'admin'),
        allowNull: false,
        defaultValue: 'customer',
    },
    status: {
        type: DataTypes.ENUM('active', 'suspended', 'deleted'),
        allowNull: false,
        defaultValue: 'active',
    },
    isEmailVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    emailVerificationToken: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    passwordResetToken: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    passwordResetExpires: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    timestamps: true,
    defaultScope: {
        attributes: { exclude: ['password', 'emailVerificationToken', 'passwordResetToken', 'passwordResetExpires'] },
    },
    scopes: {
        withSensitive: {},
    },
});


User.beforeCreate(async (user,options) => {
    if(user.password){
        user.password = await hashPassword(user.password);
    }
})


User.beforeUpdate(async (user,options) => {
    if(user.changed('password')){
        user.password = await hashPassword(user.password);
    }
})

User.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    delete values.emailVerificationToken;
    delete values.passwordResetToken;
    delete values.passwordResetExpires;
    return values;
};


module.exports = User;