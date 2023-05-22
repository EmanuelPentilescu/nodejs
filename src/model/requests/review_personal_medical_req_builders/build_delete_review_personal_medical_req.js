const buildDeleteReviewPersonalMedicalReq = (deleteReviewPersonalMedicalReqValidator) => {
    return({
        review_id,
    } = {}) => {
        let {error} = deleteReviewPersonalMedicalReqValidator({
            review_id,
        });
        if (error) 
            throw new Error(error);
        
        return {
            getReviewId: () => review_id,
        };
    };
};

module.exports= buildDeleteReviewPersonalMedicalReq;