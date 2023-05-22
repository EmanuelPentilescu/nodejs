const buildGetProgramareReq = (getProgramareReqValidator) => {
  return ({ programareId } = {}) => {
    let { error } = getProgramareReqValidator({
      programareId,
    });
    if (error) throw new Error(error);

    return {
      getProgramareId: () => programareId,
    };
  };
};

module.exports = buildGetProgramareReq;
