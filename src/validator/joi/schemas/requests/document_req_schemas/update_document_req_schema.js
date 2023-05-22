const Joi = require("joi");

module.exports = Joi.object().keys({
  documentId: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Document -> document_id -> incorect");
      error.code = 400;
      throw error;
    }),
  numeDocument: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Document -> nume document -> incorect");
      error.code = 400;
      throw error;
    }),

  tipDocument: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Document -> tip document-> incorect");
      error.code = 400;
      throw error;
    }),

  linkFisier: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Document ->link fisier -> incorect");
      error.code = 400;
      throw error;
    }),
  pacientId: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Document -> document pacient id -> incorect");
      error.code = 400;
      throw error;
    }),

  clinicaId: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Document -> document clinica id -> incorect");
      error.code = 400;
      throw error;
    }),

  programareId: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("Document -> document progamare id -> incorect");
      error.code = 400;
      throw error;
    }),
});
