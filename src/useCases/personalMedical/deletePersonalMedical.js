module.exports = async function deletePersonalMedical(
  dataController,
  requestObject
) {
  return await dataController.deleteOneObject(
    "Personal Medical",
    "personalMedicalId",
    requestObject.getPersonalMedicalId()
  );
};
