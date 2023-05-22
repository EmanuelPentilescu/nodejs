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
  numarTelefon: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("numar de telefon incorect");
      error.code = 400;
      throw error;
    }),
  adresaEmail: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("numar de telefon incorect");
      error.code = 400;
      throw error;
    }),
});
