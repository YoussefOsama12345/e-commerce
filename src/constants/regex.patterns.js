USER_MODEL_REGEX = {
    NAME: /^[A-Za-z\s]+$/,
    PASSWORD_STRONG: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
    PHONE_INTERNATIONAL: /^\+?[1-9]\d{1,14}$/
}


module.exports = {
    USER_MODEL_REGEX
};
