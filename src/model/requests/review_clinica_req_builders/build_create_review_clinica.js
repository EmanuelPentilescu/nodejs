const builCreateReviewClinicaReq = (createReviewClinicaReqValidator) => {
    return({
        nota,
        comentariu,
        pacient_id,
        clinica_id
    }={}) => {
        let {error} = createReviewClinicaReqValidator({
            nota,
            comentariu,
            pacient_id,
            clinica_id
        });
        if(error) throw new Error(error);

        return {
            getNota:() => nota,
            getComentariu: () => comentariu,
            getPacientId: () => pacient_id,
            getClinicaId: () => clinica_id,
        };
    };
};

module.exports =builCreateReviewClinicaReq;