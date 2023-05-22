module.exports = async function updateProcedura(dataController, requestObject) {
  return await dataController.updateOneObject(
    "Proceduri",
    "proceduraId",
    requestObject.getProceduraId(),
    {
      proceduraId: requestObject.getProceduraId(),
      numeProcedura: requestObject.getNumeProcedura(),
      descriere: requestObject.getDescriere(),
      durata: requestObject.getDurata(),
      pret: requestObject.getPret(),
      clinicaId: requestObject.getClinicaId(),
    }
  );
};
