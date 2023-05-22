const Joi= require("joi");

module.exports=Joi.object().keys({
    nota: Joi.number()
        .required()
        .strict()
        .min(1)
        .max(10)
        .error(()=>{
            var error= new Error("Review personal medical -> nota -> incorect");
            error.code=400;
            throw error;
        }),
    comentariu: Joi.string()
        .strict()
        .error(()=>{
            var error= new Error("Review personal medical -> comentariu -> incorect");
            error.code=400;
            throw error;
        }),
    pacient_id: Joi.string()
        .required()    
        .strict()
        .error(()=>{
            var error= new Error("Review personal medical -> pacient id-> incorect");
            error.code=400;
            throw error;
        }),
    personal_medical_id: Joi.string()
        .required()
        .strict()
        .error(()=>{
            var error= new Error("Review personal medical -> personal medical id-> incorect");
            error.code=400;
            throw error;
        })

});