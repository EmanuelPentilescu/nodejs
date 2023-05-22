const buildGetProceduraReq = (getProceduraReqValidator) => {
  return ({ proceduraId } = {}) => {
    let { error } = getProceduraReqValidator({
      proceduraId,
    });
    if (error) throw new Error(error);
    return {
      getProceduraId: () => proceduraId,
    };
  };
};

module.exports = buildGetProceduraReq;
