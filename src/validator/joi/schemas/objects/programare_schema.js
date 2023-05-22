const Joi= require("joi");

module.exports= Joi.object().keys({
    programare_id: Joi.string()
        .required()
        .strict()
        .error(()=> {
            var error= new Error("Programri -> programare id -> incorect");
            error.code=400;
            throw error;
        }),
    data_programare:Joi.string()
        .required()
        .strict()
        .error(()=> {
            var error= new Error("Programri -> data programare -> incorect");
            error.code=400;
            throw error;
        }),
    ora_programare:Joi.string()
    .required()
    .strict()
    .error(()=> {
        var error= new Error("Programri -> ora programare-> incorect");
        error.code=400;
        throw error;
    }),
    pret_total:Joi.number()
        .required()
        .strict()
        .error(()=> {
            var error= new Error("Programri -> pret total-> incorect");
            error.code=400;
            throw error;
        }),
    starea_programarii:Joi.string()
        .required()
        .strict()
        .error(()=> {
            var error= new Error("Programri -> stare programare -> incorect");
            error.code=400;
            throw error;
        }),
    recomandari_programare:Joi.string()
        .required()
        .strict()
        .error(()=> {
            var error= new Error("Programri -> recomandari programare -> incorect");
            error.code=400;
            throw error;
        }),
    clinica_id:Joi.string()
        .required()
        .strict()
        .error(()=> {
            var error= new Error("Programri -> clinica id -> incorect");
            error.code=400;
            throw error;
        }),    
    pacient_id:Joi.string()
        .required()
        .strict()
        .error(()=> {
            var error= new Error("Programri -> pacient id -> incorect");
            error.code=400;
            throw error;
        }),
    lista_personal_medical:Joi.array()
        .strict()
        .required()
        .items(
            Joi.string()
               .strict()
               .error(()=>{
                    var error= new Error("Programri -> personal medical -> incorect");
                    error.code=400;
                    throw error;
               })
        ).error(()=>{
            var error= new Error("Programri -> LISTA PERSONAL MEDICAL-> incorect");
            error.code=400;
            throw error;
        }),
    lista_proceduri:Joi.array()
    .strict()
    .required()
    .items(
        Joi.string()
           .strict()
           .error(()=>{
                var error= new Error("Programri -> proceduri -> incorect");
                error.code=400;
                throw error;
           })
    ).error(()=>{
        var error= new Error("Programri -> LISTA Proceduri-> incorect");
        error.code=400;
        throw error;
    }),
   
});