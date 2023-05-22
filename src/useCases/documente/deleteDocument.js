module.exports = async function deleteDocument(dataController, requestObject) {
  return await dataController.deleteOneObject(
    "Documente",
    "documentId",
    requestObject.getDocumentId()
  );
};
