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
  dataProgramare: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Programri -> data programare -> incorect");
      error.code = 400;
      throw error;
    }),
  oraProgramare: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Programri -> ora programare-> incorect");
      error.code = 400;
      throw error;
    }),
  pretTotal: Joi.number()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Programri -> pret total-> incorect");
      error.code = 400;
      throw error;
    }),
  stareaProgramarii: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Programri -> stare programare -> incorect");
      error.code = 400;
      throw error;
    }),
  recomandariProgramare: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Programri -> recomandari programare -> incorect");
      error.code = 400;
      throw error;
    }),
  clinicaId: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Programri -> clinica id -> incorect");
      error.code = 400;
      throw error;
    }),
  pacientId: Joi.string()
    .required()
    .strict()
    .error(() => {
      var error = new Error("Programri -> pacient id -> incorect");
      error.code = 400;
      throw error;
    }),
  listaPersonalMedical: Joi.array()
    .strict()
    .required()
    .items(
      Joi.string()
        .strict()
        .error(() => {
          var error = new Error("Programri -> personal medical -> incorect");
          error.code = 400;
          throw error;
        })
    )
    .error(() => {
      var error = new Error("Programri -> LISTA PERSONAL MEDICAL-> incorect");
      error.code = 400;
      throw error;
    }),
  listaProceduri: Joi.array()
    .strict()
    .required()
    .items(
      Joi.string()
        .strict()
        .error(() => {
          var error = new Error("Programri -> proceduri -> incorect");
          error.code = 400;
          throw error;
        })
    )
    .error(() => {
      var error = new Error("Programri -> LISTA Proceduri-> incorect");
      error.code = 400;
      throw error;
    }),
});
