const yup = require('yup');

module.exports.validateMessage = async (req, res, next) => {
  const { body } = req;

  const MESSAGE_SCHEMA = yup.object().shape({
    text: yup
      .string()
      .trim()
      .min(1)
      .max(160)
      .required(),
    email: yup
      .string()
      .email()
      .required(),
    createdAt: yup
      .date()
      .max(new Date())
      .required(),
  });
  try {
    const validatedMessage = await MESSAGE_SCHEMA.validate(body);
    req.body = validatedMessage;
    next();
  } catch (e) {
    next(e);
  }
};
