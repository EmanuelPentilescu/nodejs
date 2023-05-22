const express = require("express");

module.exports = function proceduraRoute(useCases, model) {
  const router = express.Router();

  router.route("/").get(async (req, res, next) => {
    try {
      const getProceduraReqObject = model.buildGetProceduraReq({
        proceduraId: req.query.proceduraId,
      });
      const response = await useCases.readProceduraUseCase(
        getProceduraReqObject
      );

      res.status(200).send(JSON.stringify(response));
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  router.route("/").post(async (req, res, next) => {
    try {
      const createProceduraReqObj = model.buildCreateProceduraReq(req.body);
      const response = await useCases.addProceduraUseCase(
        createProceduraReqObj
      );
      res.status(200).send("Procedura a fost adaugata");
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  router.route("/").put(async (req, res, next) => {
    try {
      const updateProceduraReqObject = model.buildUpdateProceduraReq(req.body);
      await useCases.updateProceduraUseCase(updateProceduraReqObject);
      res.status(200).send("Update-ul pentru proceduri s-a realizat cu succes");
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  router.route("/").delete(async (req, res, next) => {
    try {
      const deleteProceduraReqObj = model.buildDeleteProceduraReq(req.body);
      await useCases.deleteProceduraUseCase(deleteProceduraReqObj);
      res.status(200).send("Procedura a fost stearsa cu succes");
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  router.route("/getAll").get(async (req, res, next) => {
    try {
      const response = await controller.getAllObjects("Proceduri");
      res.status(200).send(JSON.stringify(response));
    } catch (error) {
      next(error);
    }
  });
  return router;
};
