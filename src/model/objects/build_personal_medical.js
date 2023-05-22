const buildPersonalMedical= (personalMedicalValidator) =>{
    return ({
        personal_medical_id,
        nume,
        prenume,
        experienta,
        link_poza,
        tip,
        descriere,
        lista_proceduri,
        clinica_id,
    }= {}) => {
            let { error } =personalMedicalValidator({
                personal_medical_id,
                nume,
                prenume,
                experienta,
                link_poza,
                tip,
                descriere,
                lista_proceduri,
                clinica_id,
        });
        if(error) throw new Error(error);

        return {
           getPersonalMedicalId: () => personal_medical_id,
           getNume: () => nume,
           getPrenume: () => prenume,
           getExperienta: () => experienta,
           getLinkPoza: () => link_poza,
           getTip: () => tip,
           getDescriere: () => descriere,
           getListaProceduri: () => lista_proceduri,
           getClinicaId: () => clinica_id,
        };
    };
};

module.exports= buildPersonalMedical;