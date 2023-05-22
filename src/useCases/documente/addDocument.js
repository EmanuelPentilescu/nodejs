module.exports = async function addDocument(dataController, requestObject) {
  return await dataController.addIntoDatabase("Documente", {
    numeDocument: requestObject.getNumeDocument(),
    tipDocument: requestObject.getTipDocument(),
    linkFisier: requestObject.getLinkFisier(),
    programareId: requestObject.getProgramareId(),
    clinicaId: requestObject.getClinicaId(),
    pacientId: requestObject.getPacientId(),
  });
};
