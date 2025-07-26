
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

PRODUCT_MODEL_ERRORS = {
    NAME_LENGTH: 'Name must be between 2 and 100 characters.',
    NAME_LETTERS_ONLY: 'Name can only contain letters and spaces.',
    NAME_NOT_EMPTY: 'Name cannot be empty.',
    NAME_NOT_NULL: 'Name cannot be null.',
    NAME_UNIQUE: 'Name must be unique.',
    DESCRIPTION_LENGTH: 'Description must be between 10 and 500 characters.',
    DESCRIPTION_LETTERS_ONLY: 'Description can only contain letters and spaces.',
    DESCRIPTION_NOT_EMPTY: 'Description cannot be empty.',
    DESCRIPTION_NOT_NULL: 'Description cannot be null.',
    PRICE_MIN: 'Price must be greater than 0.',
    PRICE_MAX: 'Price must be less than 1000000.',
    PRICE_DECIMAL: 'Price must be a valid decimal number.',
    PRICE_REQUIRED: 'Price is required.',
    STOCK_REQUIRED: 'Stock is required.',
    STOCK_MIN: 'Stock must be greater than 0.',
    STOCK_MAX: 'Stock must be less than 1000000.',
    CATEGORY_NOT_EMPTY: 'Category cannot be empty.',
    CATEGORY_NOT_NULL: 'Category cannot be null.',
    CATEGORY_LENGTH: 'Category must be between 2 and 100 characters.',
    CATEGORY_LETTERS_ONLY: 'Category can only contain letters and spaces.',
    DISCOUNT_PRICE_MIN: 'Discount price must be greater than 0.',
    DISCOUNT_PRICE_MAX: 'Discount price must be less than 100.',
    BRAND_LENGTH: 'Brand must be between 2 and 50 characters.',
    BRAND_LETTERS_ONLY: 'Brand can only contain letters and spaces.',
    IMAGES_ARRAY: 'Images must be an array of strings.',
    IMAGES_URL: 'Images must be valid URLs.',
    THUMBNAIL_URL: 'Thumbnail must be a valid URL.',
    RATING_MIN: 'Rating must be greater than 0.',
    RATING_MAX: 'Rating must be less than 5.',
    RATING_DECIMAL: 'Rating must be a valid decimal number.',
    WEIGHT_MIN: 'Weight must be greater than 0.',
    WEIGHT_MAX: 'Weight must be less than 1000.',
    DIMENSIONS_LENGTH: 'Dimensions must be between 2 and 50 characters.',
    DIMENSIONS_LETTERS_ONLY: 'Dimensions can only contain letters and spaces.',
    COLOR_LENGTH: 'Color must be between 2 and 50 characters.',
    COLOR_LETTERS_ONLY: 'Color can only contain letters and spaces.',
    MATERIAL_LENGTH: 'Material must be between 2 and 50 characters.',
    MATERIAL_LETTERS_ONLY: 'Material can only contain letters and spaces.',
}

ORDER_MODEL_ERRORS = {
    ITEMS_ARRAY: 'Items must be an array.',
    TOTAL_AMOUNT_MIN: 'Total amount must be greater than 0.',
    TOTAL_AMOUNT_MAX: 'Total amount must be less than 1000000.',
}

REVIEW_MODEL_ERRORS = {
    RATING_MIN: 'Rating must be at least 1.',
    RATING_MAX: 'Rating must be at most 5.',
    RATING_DECIMAL: 'Rating must be a valid decimal number.',
    COMMENT_LENGTH: 'Comment must be between 1 and 500 characters.',
}


module.exports = {
    USER_MODEL_ERRORS,
    PRODUCT_MODEL_ERRORS,
    ORDER_MODEL_ERRORS,
    REVIEW_MODEL_ERRORS
};
