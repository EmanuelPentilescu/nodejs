module.exports = async function readProcedura(dataController, requestObject) {
  const response = await dataController.getObject(
    "Proceduri",
    "proceduraId",
    requestObject.getProceduraId()
  );
  return response;
};
