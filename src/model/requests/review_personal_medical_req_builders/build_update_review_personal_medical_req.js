const buildUpdateReviewPersonalMedicalReq = (updateReviewPersonalMedicalReqValidator) => {
    return({
        review_id,
        nota,
        comentariu,
        pacient_id,
        personal_medical_id
    } = {}) => {
        let {error} = updateReviewPersonalMedicalReqValidator({
            review_id,
            nota,
            comentariu,
            pacient_id,
            personal_medical_id
        });
        if (error) 
            throw new Error(error);
        

        return {
            getReviewId: () => review_id,
            getNota: () => nota,
            getComentariu: () => comentariu,
            getPacientId: () => pacient_id,
            getPersonalMedicalId: () => personal_medical_id
        };
    };
};

module.exports = buildUpdateReviewPersonalMedicalReq;
