const express = require("express");

module.exports = function personalMedicalRoute(useCases, model) {
  const router = express.Router();

  router.route("/").get(async (req, res, next) => {
    try {
      const getPersonalMedicalReqObj = model.buildGetPersonalMedicalReq({
        personalMedicalId: req.query.personalMedicalId,
      });
      const response = await useCases.readPersonalMedicalUseCase(
        getPersonalMedicalReqObj
      );
      res.status(200).send(JSON.stringify(response));
    } catch (error) {
      next(error);
    }
  });

  router.route("/").post(async (req, res, next) => {
    try {
      const createPersonalMedicalReqObj = model.buildCreatePersonalMedicalReq(
        req.body
      );
      const response = await useCases.addPersonalMedicalUseCase(
        createPersonalMedicalReqObj
      );
      res.status(200).send("Personalul medical a fost adaugat cu succes");
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  router.route("/").delete(async (req, res, next) => {
    try {
      const deletePersonalMedicalReqObject =
        model.buildDeletePersonalMedicalReq(req.body);
      await useCases.deletePersonalMedicalUseCase(
        deletePersonalMedicalReqObject
      );
      res.status(200).send("Personalul medical a fost sters cu succes");
    } catch (error) {
      next(error);
    }
  });

  router.route("/").put(async (req, res, next) => {
    try {
      const updatePersonalMedicalReqObject =
        model.buildUpdatePersonalMedicalReq(req.body);
      await useCases.updatePersonalMedicalUseCase(
        updatePersonalMedicalReqObject
      );
      res.status(200).send("Update pentru clinica s-a produs cu succes");
    } catch (error) {
      next(error);
    }
  });

  router.route("/getAll").get(async (req, res, next) => {
    try {
      const response = await useCases.getAllObjects("Personal Medical");
      res.status(200).send(JSON.stringify(response));
    } catch (error) {
      next(error);
    }
  });
  return router;
};
