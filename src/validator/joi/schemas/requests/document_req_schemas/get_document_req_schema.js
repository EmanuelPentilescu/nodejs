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
});
