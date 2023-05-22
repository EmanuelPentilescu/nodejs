const buildUpdateDocumentReq = (updateDocumentReqValidator) => {
  return ({
    documentId,
    numeDocument,
    tipDocument,
    linkFisier,
    pacientId,
    clinicaId,
    programareId,
  } = {}) => {
    let { error } = updateDocumentReqValidator({
      documentId,
      numeDocument,
      tipDocument,
      linkFisier,
      pacientId,
      clinicaId,
      programareId,
    });
    if (error) throw new Error(error);

    return {
      getDocumentId: () => documentId,
      getNumeDocument: () => numeDocument,
      getTipDocument: () => tipDocument,
      getLinkFisier: () => linkFisier,
      getPacientId: () => pacientId,
      getClinicaId: () => clinicaId,
      getProgramareId: () => programareId,
    };
  };
};

module.exports = buildUpdateDocumentReq;
