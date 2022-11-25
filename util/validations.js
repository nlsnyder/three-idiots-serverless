const SPECIAL_CHARS_REGEX = /[^<>()&+%]+$/;
const NAME_REGEX = /(\w|[-.' ])+$/;

const validateName = (name) => {
  if (typeof name != 'string') {
    return false;
  }
  return NAME_REGEX.test(name);
}

const validateSpecialCharacters = (message) => {
  if (typeof message != 'string') {
    return false;
  }
  return SPECIAL_CHARS_REGEX.test(message);
};

exports.validateSpecialCharacters = validateSpecialCharacters;
exports.validateName = validateName;