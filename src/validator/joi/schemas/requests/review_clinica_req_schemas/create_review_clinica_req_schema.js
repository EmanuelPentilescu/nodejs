const Joi= require("joi");

module.exports=Joi.object().keys({
    nota: Joi.number()
        .required()
        .strict()
        .error(()=>{
            var error= new Error("Review clinica -> nota -> incorect");
            error.code= 400;
            throw error;
        }),   
    comentariu: Joi.string()
        .strict()
        .error(()=>{
            var error= new Error("Review clinica -> comentariu -> incorect");
            error.code= 400;
            throw error;
        }),
    pacient_id:Joi.string()
        .required()
        .strict()
        .error(()=>{
            var error= new Error("Review clinica -> pacient id -> incorect");
            error.code= 400;
            throw error;
        }),
    clinica_id:Joi.string()
        .required()
        .strict()
        .error(()=>{
            var error= new Error("Review clinica -> clinica id -> incorect");
            error.code= 400;
            throw error;
        }),
});