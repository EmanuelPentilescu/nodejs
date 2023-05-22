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
  nume: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Personal medical nume incorect");
      error.code = 400;
      throw error;
    }),
  prenume: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Personal medical prenume incorect");
      error.code = 400;
      throw error;
    }),
  experienta: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Personal medical experienta incorect");
      error.code = 400;
      throw error;
    }),
  linkPoza: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Personal medical link poza incorect");
      error.code = 400;
      throw error;
    }),
  tip: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Personal medical tip incorect");
      error.code = 400;
      throw error;
    }),
  descriere: Joi.string()
    .strict()
    .error(() => {
      var error = new Error("Personal medical descriere incorect");
      error.code = 400;
      throw error;
    }),
  listaProceduri: Joi.array()
    .items(
      Joi.string()
        .strict()
        .error(() => {
          var error = new Error("id procedura incorect");
          error.code = 400;
          throw error;
        })
    )
    .error(() => {
      var error = new Error("lista proceduri incorecta");
      error.code = 400;
      throw error;
    }),
  clinicaId: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Personal medical clinica ID incorect");
      error.code = 400;
      throw error;
    }),
});
