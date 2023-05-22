const Joi = require("joi");

module.exports = Joi.object().keys({
  personalMedicalId: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Personal medical id incorect");
      error.code = 400;
      throw error;
    }),
});
