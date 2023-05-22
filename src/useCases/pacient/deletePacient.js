module.exports = async function deletePacient(dataController, requestObject) {
  const response = await dataController.deleteOneObject(
    "Pacienti",
    "pacientId",
    requestObject.getPacientId()
  );
  return response;
};
