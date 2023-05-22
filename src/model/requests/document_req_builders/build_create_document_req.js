const buildCreateDocumentReq = (createDocumentReqValidator) => {
  return ({
    numeDocument,
    tipDocument,
    linkFisier,
    pacientId,
    clinicaId,
    programareId,
  } = {}) => {
    let { error } = createDocumentReqValidator({
      numeDocument,
      tipDocument,
      linkFisier,
      pacientId,
      clinicaId,
      programareId,
    });
    if (error) throw new Error(error);

    return {
      getNumeDocument: () => numeDocument,
      getTipDocument: () => tipDocument,
      getLinkFisier: () => linkFisier,
      getPacientId: () => pacientId,
      getClinicaId: () => clinicaId,
      getProgramareId: () => programareId,
    };
  };
};

module.exports = buildCreateDocumentReq;
