const yup = require('yup');

module.exports.validateMessage = async (req, res, next) => {
  const { body } = req;
  try {
    next();
  } catch (e) {
    next(e);
  }
};
