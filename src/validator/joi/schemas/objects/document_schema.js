const Joi= require("joi");

module.exports = Joi.object().keys({
    document_id: Joi.string()
        .required()
        .strict()
        .error(()=>{
            var error= new Error("Document -> document_id -> incorect");
            error.code= 400;
            throw error;
        }),
    nume_document: Joi.string()
        .required()
        .strict()
        .error(()=>{
            var error= new Error("Document -> nume document -> incorect");
            error.code= 400;
            throw error;
        }),
    
    tip_document: Joi.string()
        .required()
        .strict()
        .error(()=>{
            var error= new Error("Document -> tip document-> incorect");
            error.code= 400;
            throw error;
        }),

    link_fisier: Joi.string()
        .required()
        .strict()
        .error(()=>{
            var error= new Error("Document ->link fisier -> incorect");
            error.code= 400;
            throw error;
        }),
    document_pacient_id: Joi.string()
        .required()
        .strict()
        .error(()=>{
            var error= new Error("Document -> document pacient id -> incorect");
            error.code= 400;
            throw error;
        }),

    document_clinica_id: Joi.string()
        .required()
        .strict()
        .error(()=>{
            var error= new Error("Document -> document clinica id -> incorect");
            error.code= 400;
            throw error;
        }),
    
    document_programare_id: Joi.string()
        .strict()
        .error(()=>{
            var error= new Error("Document -> document progamare id -> incorect");
            error.code= 400;
            throw error;
        }),
});