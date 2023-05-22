module.exports = async function deleteClinica(dataController, requestObject) {
  const response = await dataController.deleteOneObject(
    "Clinici",
    "clinicaId",
    requestObject.getClinicaId()
  );
  return response;
};
