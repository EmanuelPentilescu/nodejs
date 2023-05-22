const Joi = require("joi");

module.exports = Joi.object().keys({
  programareId: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Programri -> programare id -> incorect");
      error.code = 400;
      throw error;
    }),
});
