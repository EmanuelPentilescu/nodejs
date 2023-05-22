const Joi= require("joi");

module.exports=Joi.object().keys({
    review_id: Joi.string()
        .required()
        .strict()
        .error(()=>{
            var error= new Error("Review personal medical -> review id-> incorect");
            error.code=400;
            throw error;
        }),
});