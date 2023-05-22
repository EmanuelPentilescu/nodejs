module.exports = async function readPersonalMedical(
  dataController,
  requestObject
) {
  return await dataController.getObject(
    "Personal Medical",
    "personalMedicalId",
    requestObject.getPersonalMedicalId()
  );
};
