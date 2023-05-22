const buildGetPacientReq = (getPacientReqValidator) => {
  return ({ pacientId } = {}) => {
    let { error } = getPacientReqValidator({
      pacientId,
    });
    if (error) throw new Error(error);
    return {
      getPacientId: () => pacientId,
    };
  };
};

module.exports = buildGetPacientReq;
