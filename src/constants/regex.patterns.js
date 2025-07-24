USER_MODEL_REGEX = {
    NAME: /^[A-Za-z\s]+$/,
    PASSWORD_STRONG: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
    PHONE_INTERNATIONAL: /^\+?[1-9]\d{1,14}$/
}

PRODUCT_MODEL_REGEX = {
    NAME: /^[A-Za-z\s]+$/,
    DESCRIPTION: /^[A-Za-z\s]+$/,
    CATEGORY: /^[A-Za-z\s]+$/,
    BRAND: /^[A-Za-z\s]+$/,
    DIMENSIONS: /^[A-Za-z\s]+$/,
    COLOR: /^[A-Za-z\s]+$/,
    MATERIAL: /^[A-Za-z\s]+$/,
}

ORDER_MODEL_REGEX = {
    STATUS: /^[A-Za-z\s]+$/,
}

REVIEW_MODEL_REGEX = {
    COMMENT: /^[a-zA-Z0-9\s]+$/,
}

module.exports = {
    USER_MODEL_REGEX,
    PRODUCT_MODEL_REGEX,
    ORDER_MODEL_REGEX,
    REVIEW_MODEL_REGEX
};
