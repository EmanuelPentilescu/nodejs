const builDeleteReviewClinicaReq = (deleteReviewClinicaReqValidator) => {
    return({
        review_clinica_id,
    }={}) => {
        let {error} = deleteReviewClinicaReqValidator({
            review_clinica_id,
        });
        if(error) throw new Error(error);

        return {
            getReviewClinicaId: () => review_clinica_id,
        };
    };
};

module.exports =builDeleteReviewClinicaReq;