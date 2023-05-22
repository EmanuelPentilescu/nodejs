const Joi = require("joi");

module.exports= Joi.object().keys({
    procedura_id: Joi.string()
        .strict()
        .required()
        .error(()=>{
            var error= new Error("id incorect procedura");
            error.code=400;
            throw error;
        }),
    nume_procedura: Joi.string()
        .strict()
        .required()
        .error(()=>{
            var error= new Error("nume procedura incorect");
            error.code=400;
            throw error;
        }),
    descriere: Joi.string()
        .strict()
        .required()
        .error(()=>{
            var error= new Error("descriere procedura incorecta");
            error.code=400;
            throw error;
        }),
    durata: Joi.string()
        .strict()
        .required()
        .error(()=>{
            var error= new Error("durata procedura incorect");
            error.code=400;
            throw error;
        }),
    pret: Joi.number()
        .strict()
        .required()
        .error(()=>{
            var error= new Error("pret procedura incorecta");
            error.code=400;
            throw error;
        }),
    clinica_id: Joi.string()
        .strict()
        .required()
        .error(()=>{
            var error= new Error("clinica_id procedura incorect");
            error.code=400;
            throw error;
        })
});