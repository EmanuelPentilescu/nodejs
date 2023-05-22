const buildGetReviewPersonalMedicalReq = (getReviewPersonalMedicalReqValidator) => {
    return({
        review_id,
    } = {}) => {
        let {error} = getReviewPersonalMedicalReqValidator({
            review_id,
        });
        if (error) 
            throw new Error(error);
        
        return {
            getReviewId: () => review_id,
        };
    };
};

module.exports= buildGetReviewPersonalMedicalReq;