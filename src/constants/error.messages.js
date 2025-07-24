
USER_MODEL_ERRORS = {
    NAME_LENGTH: 'Name must be between 2 and 100 characters.',
    NAME_LETTERS_ONLY: 'Name can only contain letters and spaces.',
    EMAIL_IN_USE: 'Email address already in use.',
    EMAIL_INVALID: 'Must be a valid email address.',
    EMAIL_REQUIRED: 'Email is required.',
    PASSWORD_LENGTH: 'Password must be at least 8 characters.',
    PASSWORD_STRENGTH: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
    ADDRESS_LENGTH: 'Address must be at least 10 characters.',
    PHONE_FORMAT: 'Phone number must be a valid international format.'
}


module.exports = {
    USER_MODEL_ERRORS
};
