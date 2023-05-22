const buildDeleteProceduraReq = (deleteProceduraReqValidator) => {
  return ({ proceduraId } = {}) => {
    let { error } = deleteProceduraReqValidator({
      proceduraId,
    });
    if (error) throw new Error(error);
    return {
      getProceduraId: () => proceduraId,
    };
  };
};

module.exports = buildDeleteProceduraReq;
