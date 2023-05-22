const Joi = require("joi");

module.exports = Joi.object().keys({
  pacient_id: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("id incorect pacient");
      error.code = 400;
      throw error;
    }),
  nume: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("nume  pacient incorect");
      error.code = 400;
      throw error;
    }),
  prenume: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("prenume pacient incorect");
      error.code = 400;
      throw error;
    }),
  numar_telefon: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("numar de telefon incorect");
      error.code = 400;
      throw error;
    }),
  adresa_email: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("numar de telefon incorect");
      error.code = 400;
      throw error;
    }),
});
