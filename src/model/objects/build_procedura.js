const buildProcedura = (proceduraValidator) => {
    return({
        procedura_id,
        nume_procedura,
        descriere,
        durata,
        pret,
        clinica_id
    }= {}) => {
        let {error} = proceduraValidator({
            procedura_id,
            nume_procedura,
            descriere,
            durata,
            pret,
            clinica_id
        });
        if(error) throw new Error(error);
        return{
            getProceduraId: () => procedura_id,
            getNumeProcedura: () => nume_procedura,
            getDescriere: () => descriere,
            getDurata: () => durata,
            getPret: () => pret,
            getClinicaId: () => clinica_id
        };
    };
};

module.exports = buildProcedura;