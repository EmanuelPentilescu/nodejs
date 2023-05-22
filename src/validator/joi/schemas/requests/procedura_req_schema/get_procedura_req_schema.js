const Joi = require("joi");

module.exports = Joi.object().keys({
  proceduraId: Joi.string()
    .strict()
    .required()
    .error(() => {
      var error = new Error("id incorect procedura");
      error.code = 400;
      throw error;
    }),
});
