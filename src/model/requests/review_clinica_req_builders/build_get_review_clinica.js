const builGetReviewClinicaReq = (getReviewClinicaReqValidator) => {
    return({
        review_clinica_id,
    }={}) => {
        let {error} = getReviewClinicaReqValidator({
            review_clinica_id,
        });
        if(error) throw new Error(error);

        return {
            getReviewClinicaId: () => review_clinica_id,
        };
    };
};

module.exports =builGetReviewClinicaReq;