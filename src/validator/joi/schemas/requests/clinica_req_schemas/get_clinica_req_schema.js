const Joi = require("joi");

module.exports = Joi.object().keys({
  clinicaId: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("id incorect clinica");
      error.code = 400;
      throw error;
    }),
});
