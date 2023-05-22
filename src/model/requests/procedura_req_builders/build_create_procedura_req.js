const buildCreateProceduraReq = (createProceduraReqValidator) => {
  return ({ numeProcedura, descriere, durata, pret, clinicaId } = {}) => {
    let { error } = createProceduraReqValidator({
      numeProcedura,
      descriere,
      durata,
      pret,
      clinicaId,
    });
    if (error) throw new Error(error);
    return {
      getNumeProcedura: () => numeProcedura,
      getDescriere: () => descriere,
      getDurata: () => durata,
      getPret: () => pret,
      getClinicaId: () => clinicaId,
    };
  };
};

module.exports = buildCreateProceduraReq;
