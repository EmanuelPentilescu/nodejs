const Joi = require("joi");

module.exports = Joi.object().keys({
  pacientId: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("id incorect pacient");
      error.code = 400;
      throw error;
    }),
});
