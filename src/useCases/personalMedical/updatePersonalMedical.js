module.exports = async function updatePersonalMedical(
  dataController,
  requestObject
) {
  return await dataController.updateOneObject(
    "Personal Medical",
    "personalMedicalId",
    requestObject.getPersonalMedicalId(),
    {
      personalMedicalId: requestObject.getPersonalMedicalId(),
      nume: requestObject.getNume(),
      prenume: requestObject.getPrenume(),
      experienta: requestObject.getExperienta(),
      linkPoza: requestObject.getLinkPoza(),
      tip: requestObject.getTip(),
      descriere: requestObject.getDescriere(),
      listaProceduri: requestObject.getListaProceduri(),
      clinicaId: requestObject.getClinicaId(),
    }
  );
};
