const express = require("express");

module.exports = function programariRoute(useCases, model) {
  const router = express.Router();

  router.route("/").get(async (req, res, next) => {
    try {
      const buildGetProgramare = model.buildGetProgramareReq({
        programareId: req.query.programareId,
      });
      const response = await useCases.readProgramareUseCase(buildGetProgramare);
      res.status(200).send(JSON.stringify(response));
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  router.route("/").post(async (req, res, next) => {
    try {
      const buildCreateProgramare = model.buildCreateProgramareReq(req.body);
      await useCases.addProgramareUseCase(buildCreateProgramare);
      res.status(200).send("Programarea a fost adaugata");
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  router.route("/").put(async (req, res, next) => {
    try {
      const buildUpdateProgramareReq = model.buildUpdateProgramareReq(req.body);
      console.log(buildUpdateProgramareReq);
      await useCases.updateProgramareUseCase(buildUpdateProgramareReq);
      res.status(200).send("Update-ul programarii a fost realizat cu succes");
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  router.route("/").delete(async (req, res, next) => {
    try {
      const buildDeleteProgramareReq = model.buildDeleteProgramareReq({
        programareId: req.body.programareId,
      });
      await useCases.deleteProgramareUseCase(buildDeleteProgramareReq);
      res.status(200).send("Programarea a fost stearsa cu succes");
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  return router;
};
