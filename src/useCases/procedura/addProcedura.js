module.exports = async function addProcedura(dataController, requestObject) {
  const response = await dataController.addIntoDatabase("Proceduri", {
    numeProcedura: requestObject.getNumeProcedura(),
    descriere: requestObject.getDescriere(),
    durata: requestObject.getDurata(),
    pret: requestObject.getPret(),
    clinicaId: requestObject.getClinicaId(),
  });
  return response;
};
