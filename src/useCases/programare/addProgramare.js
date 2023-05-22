module.exports = async function addProgramare(dataController, requestObject) {
  return await dataController.addIntoDatabase("Programari", {
    dataProgramare: requestObject.getDataProgramare(),
    oraProgramare: requestObject.getOraProgramare(),
    pretTotal: requestObject.getPretTotal(),
    stareaProgramarii: requestObject.getStareaProgramarii(),
    recomandariProgramare: requestObject.getRecomandariProgramare(),
    clinicaId: requestObject.getClinicaId(),
    pacientId: requestObject.getPacientId(),
    listaPersonalMedical: requestObject.getListaPersonalMedical(),
    listaProceduri: requestObject.getListaProceduri(),
  });
};
