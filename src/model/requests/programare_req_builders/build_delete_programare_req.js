const buildUpdateProgramareReq = (updateProgramareReqValidator) => {
  return ({ programareId } = {}) => {
    let { error } = updateProgramareReqValidator({
      programareId,
    });
    if (error) throw new Error(error);

    return {
      getProgramareId: () => programareId,
    };
  };
};

module.exports = buildUpdateProgramareReq;
