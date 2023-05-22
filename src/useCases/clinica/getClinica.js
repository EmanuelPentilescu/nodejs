module.exports = async function getClinica(dataController, requestObject) {
  const response = await dataController.getObject(
    "Clinici",
    "clinica_id",
    requestObject.getClinicaId()
  );
  return response;
};
