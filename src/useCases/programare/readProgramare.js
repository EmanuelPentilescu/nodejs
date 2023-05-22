module.exports = async function readProgramare(dataController, requestObject) {
  return await dataController.getObject(
    "Programari",
    "programareId",
    requestObject.getProgramareId()
  );
};
