const Joi = require("joi");

module.exports = Joi.object().keys({
  nume: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("nume clinica incorect");
      error.code = 400;
      throw error;
    }),
  adresa: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("adresa clinica incorect");
      error.code = 400;
      throw error;
    }),
  oras: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("oras clinica incorect");
      error.code = 400;
      throw error;
    }),
  codPostal: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("cod postal clinica incorecta");
      error.code = 400;
      throw error;
    }),
  numarTelefon: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("numar de telefon clinica incorect");
      error.code = 400;
      throw error;
    }),
  programLucru: Joi.string()
    .strict()
    .required()
    .error(() => {
      var error = new Error("program de lucru incorect");
      error.code = 400;
      throw error;
    }),
  descriere: Joi.string()
    .strict()
    .required()
    .error(() => {
      var error = new Error("descriere incorecta");
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

  listaPersonalMedical: Joi.array()
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
      var error = new Error("lista personal medical incorecta");
      error.code = 400;
      throw error;
    }),
});
