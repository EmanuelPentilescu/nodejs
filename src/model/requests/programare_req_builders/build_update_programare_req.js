const buildUpdateProgramareReq = (updateProgramareReqValidator) => {
  return ({
    programareId,
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
    let { error } = updateProgramareReqValidator({
      programareId,
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
      getProgramareId: () => programareId,
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

module.exports = buildUpdateProgramareReq;
