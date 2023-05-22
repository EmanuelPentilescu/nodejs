const express = require("express");

module.exports = function (useCases, model) {
  const router = express.Router();

  router.route("/").get(async (req, res, next) => {
    try {
      const readDocumentReqObj = model.buildGetDocumentReq({
        documentId: req.query.documentId,
      });

      const response = await useCases.readDocumentUseCase(readDocumentReqObj);
      res.status(200).send(JSON.stringify(response));
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  router.route("/").post(async (req, res, next) => {
    try {
      console.log(req.body);

      const buildCreateDocumentReqObj = model.buildCreateDocumentReq(req.body);
      await useCases.addDocumentUseCase(buildCreateDocumentReqObj);
      res.status(200).send("Documentul a fost adaugata");
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  router.route("/").put(async (req, res, next) => {
    try {
      const buildUpdateDocumentReqObj = model.buildUpdateDocumentReq(req.body);
      await useCases.updateDocumentUseCase(buildUpdateDocumentReqObj);
      res.status(200).send("Update pentru document s-a produs cu succes");
    } catch (error) {
      next(error);
    }
  });

  router.route("/").delete(async (req, res, next) => {
    try {
      const buildDeleteDocumentReqObj = model.buildDeleteDocumentReq({
        documentId: req.body.documentId,
      });
      await useCases.deleteDocumentUseCase(buildDeleteDocumentReqObj);
      res.status(200).send("Stergerea s-a efectuat cu succes");
    } catch (error) {
      next(error);
    }
  });

  router.route("/getAll").get(async (req, res, next) => {
    try {
      const response = await useCases.getAllObjects("Documente");
      res.status(200).send(JSON.stringify(response));
    } catch (error) {
      next(error);
    }
  });
  return router;
};
