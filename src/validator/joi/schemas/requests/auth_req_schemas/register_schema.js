const Joi = require("joi");

module.exports = Joi.object().keys({
  email: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("username incorect");
      error.code = 400;
      throw error;
    }),
  parola: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("parola incorecta");
      error.code = 400;
      throw error;
    }),
});
