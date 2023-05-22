const buildUpdateProceduraReq = (updateProceduraReqValidator) => {
  return ({
    proceduraId,
    numeProcedura,
    descriere,
    durata,
    pret,
    clinicaId,
  } = {}) => {
    let { error } = updateProceduraReqValidator({
      proceduraId,
      numeProcedura,
      descriere,
      durata,
      pret,
      clinicaId,
    });
    if (error) throw new Error(error);
    return {
      getProceduraId: () => proceduraId,
      getNumeProcedura: () => numeProcedura,
      getDescriere: () => descriere,
      getDurata: () => durata,
      getPret: () => pret,
      getClinicaId: () => clinicaId,
    };
  };
};

module.exports = buildUpdateProceduraReq;
