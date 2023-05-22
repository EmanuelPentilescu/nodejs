const buildProgramare= (programareValidator) => {
    return({
        programare_id,
        data_programare,
        ora_programare,
        pret_total,
        starea_programarii,
        recomandari_programare,
        clinica_id,
        pacient_id,
        lista_personal_medical,
        lista_proceduri
    }= {}) =>{
        let {error} = programareValidator({
            programare_id,
            data_programare,
            ora_programare,
            pret_total,
            starea_programarii,
            recomandari_programare,
            clinica_id,
            pacient_id,
            lista_personal_medical,
            lista_proceduri
        });
        if(error) throw new Error(error);

        return {
           getProgramareId: () => programare_id,
           getDataProgramare: () => data_programare,
           getOraProgramare: () => ora_programare,
           getPretTotal: () => pret_total,
           getStareaProgramarii: () => starea_programarii,
           getRecomandariProgramare: () => recomandari_programare,
           getClinicaId: () => clinica_id,
           getPacientId: () => pacient_id,
           getListaPersonalMedical: () => lista_personal_medical,
           getListaProceduri: () => lista_proceduri 
        };
    };
};

module.exports= buildProgramare;