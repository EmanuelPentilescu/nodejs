const express = require("express");

module.exports = function pacientRoute(useCases, model) {
  const router = express.Router();

  router.route("/").get(async (req, res, next) => {
    try {
      const getPacientReqObject = model.buildGetPacientReq({
        pacientId: req.query.pacientID,
      });
      const response = await useCases.readPacientUseCase(getPacientReqObject);
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  });

  router.route("/").post(async (req, res, next) => {
    try {
      const createPacientReqObject = model.buildCreatePacientReq(req.body);
      const response = await useCases.addPacienteUseCase(
        createPacientReqObject
      );

      res.status(200).send("Pacientul a fost adaugat cu succes");
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  router.route("/").put(async (req, res, next) => {
    try {
      const updatePacientReqObject = model.buildUpdatePacientReq(req.body);
      const response = await useCases.updatePacientUseCase(
        updatePacientReqObject
      );
      res.status(200).send("Pacientul a fost updatat cu succes");
    } catch (error) {
      next(error);
    }
  });

  router.route("/").delete(async (req, res, next) => {
    try {
      const deletePacientReqObject = model.buildDeletePacientReq(req.body);
      useCases.deletePacientUseCase(deletePacientReqObject);
      res.status(200).send("Pacientul a fost sters cu succes");
    } catch (error) {
      next(error);
    }
  });

  router.route("/getAllPacientiFromClinica").get(async (req, res, next) => {
    try {
      const getAllPacientiReqObject = model.buildGetClinicaReq({
        clinicaId: req.query.clinicaID,
      });
      const response = await useCases.getAllPacientiFromClinicaUseCase(
        getAllPacientiReqObject
      );
      res.status(200).send(JSON.stringify(response));
    } catch (error) {
      next(error);
    }
  });

  return router;
};
