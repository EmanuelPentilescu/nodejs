const buildDeleteDocumentReq = (deleteDocumentReqValidator) => {
  return ({ documentId } = {}) => {
    let { error } = deleteDocumentReqValidator({
      documentId,
    });
    if (error) throw new Error(error);

    return {
      getDocumentId: () => documentId,
    };
  };
};

module.exports = buildDeleteDocumentReq;
