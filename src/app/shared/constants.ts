export const Paths = {
    HOME: '/',
    USER: 'user',
    USER_LIST: 'user-list',
    USER_DETAIL: 'user-detail',
    USER_CREATE: 'user-create',
    USER_DELETE: 'user-delete'
}

export const CustomRegExp = {
    MAX_100_CHAR: /^.{1,100}$/,
    MAX_500_CHAR: /^.{1,500}$/,
    CHAR_5: /^.{5}$/,
    CHAR_6: /^.{6}$/,
    CHAR_17: /^.{0,17}$/,
    MAX_3_INPUT: /^.{0,3}$/,
    MAX_8_CHAR: /^.{0,8}$/,
    MAX_9_INPUT: /^.{0,9}$/,
    NUMERIC_REGEXP: /^-?\d+$/,
    ALPHANUMERIC_REGEXP: /^[\wÀ-ÿ\d ]*$/,
    EMAIL_REGEXP: /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PERCENTAGE_2INT_2DEC: /^-?\d{1,2}([\.,]\d{1,2})?$/,
    PERCENTAGE: /^-?\d{1,2}([\.,]\d{1,3})?$/,
    PERCENTAGE_POSITIVE: /^\d{1,2}([\.,]\d{1,3})?$|^100$/,
    PERCENTAGE_2INT_3DEC: /^-?\d{1,2}([\.,]\d{1,3})?$/,
    PERCENTAGE_2INT_4DEC: /^-?\d{1,2}([\.,]\d{1,4})?$/,
    PERCENTAGE_3INT: /^-?\d{1,3}([\.,]\d{1,3})?$/,
    PERCENTAGE_3INT_4DEC: /^-?\d{1,3}([\.,]\d{1,4})?$/,
    PERCENTAGE_1DEC: /^-?\d{1,2}([\.,]\d)?$/,
    PERCENTAGE_2DEC: /^-?\d{1,6}([\.,]\d{1,2})?$/,
    PERCENTAGE_4DEC: /^-?\d{1,2}([\.,]\d{1,4})?$/,
    PERCENTAGE_6INT_4DEC: /^-?\d{1,6}([\.,]\d{1,4})?$/,
    PERCENTAGE_MAX_100: /^-?\d{1,2}([\.,]\d{1,3})?$|^100$/,
    PERCENTAGE_MAX_100_4DEC: /^-?\d{1,2}([\.,]\d{1,4})?$|^100$/,
    MAX_8_INT: /^-?\d{0,8}$/,
    MAX_6_INT: /^-?\d{0,6}$/,
    MAX_4_INT: /^-?\d{0,4}$/,
    MAX_3_INT: /^-?\d{0,3}$/,
    MAX_2_INT: /^-?\d{0,2}$/,
    MAX_2_INT_MIN_1: /^([1-9]|\d{2})$/,
    MAX_7CIFRE_DEC: /^-?\d{0,7}([\.,]\d{1,2})?$/,
    MAX_5CIFRE_DEC: /^-?\d{0,5}([\.,]\d{1,2})?$/,
    MAX_9CIFRE_DEC: /^-?\d{0,9}([\.,]\d{1,2})?$/,
    MAX_12CIFRE_DEC: /^-?\d{0,12}([\.,]\d{1,2})?$/,
    MAX_16CIFRE_DEC: /^-?\d{0,16}([\.,]\d{1,2})?$/,
    MAX_2CIFRE_DEC: /^-?\d{0,2}([\.,]\d{1,2})?$/,
    DATE: /^((\d{1,2}.\d{1,2}.\d{2,4})|(\d{2,4}.\d{1,2}.\d{1,2}))$/,
    EVERYTHING: /^.*$/,
    REGON_9_INT: /^\d{9}$/
  };