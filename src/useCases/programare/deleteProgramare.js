module.exports = async function deleteProgramare(
  dataController,
  requestObject
) {
  return await dataController.deleteOneObject(
    "Programari",
    "programareId",
    requestObject.getProgramareId()
  );
};
