module.exports = async function readPacient(dataController, requestObject) {
  return await dataController.getObject(
    "Pacienti",
    "pacientId",
    requestObject.getPacientId()
  );
};
