const buildCreateProgramareReq = (createProgramareReqValidator) => {
  return ({
    dataProgramare,
    oraProgramare,
    pretTotal,
    stareaProgramarii,
    recomandariProgramare,
    clinicaId,
    pacientId,
    listaPersonalMedical,
    listaProceduri,
  } = {}) => {
    let { error } = createProgramareReqValidator({
      dataProgramare,
      oraProgramare,
      pretTotal,
      stareaProgramarii,
      recomandariProgramare,
      clinicaId,
      pacientId,
      listaPersonalMedical,
      listaProceduri,
    });
    if (error) throw new Error(error);

    return {
      getDataProgramare: () => dataProgramare,
      getOraProgramare: () => oraProgramare,
      getPretTotal: () => pretTotal,
      getStareaProgramarii: () => stareaProgramarii,
      getRecomandariProgramare: () => recomandariProgramare,
      getClinicaId: () => clinicaId,
      getPacientId: () => pacientId,
      getListaPersonalMedical: () => listaPersonalMedical,
      getListaProceduri: () => listaProceduri,
    };
  };
};

module.exports = buildCreateProgramareReq;
