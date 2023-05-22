const buildCreateReviewPersonalMedicalReq = (createReviewPersonalMedicalReqValidator) => {
    return({
        nota,
        comentariu,
        pacient_id,
        personal_medical_id
    } = {}) => {
        let {error} = createReviewPersonalMedicalReqValidator({
            nota,
            comentariu,
            pacient_id,
            personal_medical_id
        });
        if (error) 
            throw new Error(error);
        
        return {
            getNota: () => nota,
            getComentariu: () => comentariu,
            getPacientId: () => pacient_id,
            getPersonalMedicalId: () => personal_medical_id
        };
    };
};

module.exports= buildCreateReviewPersonalMedicalReq;