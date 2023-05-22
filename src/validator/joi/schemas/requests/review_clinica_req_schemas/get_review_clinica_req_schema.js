const Joi= require("joi");

module.exports=Joi.object().keys({
    review_clinica_id: Joi.string()
        .strict()
        .required()
        .error(()=>{
            var error= new Error("Review clinica -> review id -> incorect");
            error.code= 400;
            throw error;
        }),
});