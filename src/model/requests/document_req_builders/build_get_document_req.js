const buildGetDocumentReq = (getDocumentReqValidator) => {
  return ({ documentId } = {}) => {
    let { error } = getDocumentReqValidator({
      documentId,
    });
    if (error) throw new Error(error);

    return {
      getDocumentId: () => documentId,
    };
  };
};

module.exports = buildGetDocumentReq;
