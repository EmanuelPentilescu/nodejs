const buildDeletePacientReq = (deletePacientReqValidator) => {
  return ({ pacientId } = {}) => {
    let { error } = deletePacientReqValidator({
      pacientId,
    });
    if (error) throw new Error(error);
    return {
      getPacientId: () => pacientId,
    };
  };
};

module.exports = buildDeletePacientReq;
