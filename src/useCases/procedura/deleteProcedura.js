module.exports = async function deleteProcedura(dataController, requestObject) {
  return await dataController.deleteOneObject(
    "Proceduri",
    "proceduraId",
    requestObject.getProceduraId()
  );
};
