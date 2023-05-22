const builUpdateReviewClinicaReq = (updateReviewClinicaReqValidator) => {
    return({
        review_clinica_id,
        nota,
        comentariu,
        pacient_id,
        clinica_id
    }={}) => {
        let {error} = updateReviewClinicaReqValidator({
            review_clinica_id,
            nota,
            comentariu,
            pacient_id,
            clinica_id
        });
        if(error) throw new Error(error);

        return {
            getReviewClinicaId: () => review_clinica_id,
            getNota:() => nota,
            getComentariu: () => comentariu,
            getPacientId: () => pacient_id,
            getClinicaId: () => clinica_id,
        };
    };
};

module.exports =builUpdateReviewClinicaReq;