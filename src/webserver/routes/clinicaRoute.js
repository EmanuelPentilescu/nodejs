const express = require("express");

module.exports = function clinicaRoute(useCases, model) {
  const router = express.Router();

  router.route("/").get(async (req, res, next) => {
    try {
      const getClinicaReqObject = model.buildGetClinicaReq({
        clinica_id: req.query.clinicaID,
      });
      useCases;
      const response = await useCases.getObject(
        "Clinici",
        "clinica_id",
        getClinicaReqObject.getClinicaId()
      );

      res.status(200).send(JSON.stringify(response));
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  router.route("/").post(async (req, res, next) => {
    try {
      const clinicaRequestObject = model.buildCreateClinicaReq(req.body);
      const response = await useCases.addClinicaUseCase(clinicaRequestObject);
      console.log(response);
      res.status(200).send("Clinica a fost adaugata");
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  router.route("/").put(async (req, res, next) => {
    try {
      const updateClinicaReqObject = model.buildUpdateClinicaReq(req.body);
      await useCases.updateClinicaUseCase(updateClinicaReqObject);
      res.status(200).send("Update pentru clinica s-a produs cu succes");
    } catch (error) {
      next(error);
    }
  });

  router.route("/").delete(async (req, res, next) => {
    try {
      const deleteClinicaReqObject = model.buildDeleteClinicaReq(req.body);
      await useCases.deleteClinicaUseCase(deleteClinicaReqObject);
      res.status(200).send("Stergerea s-a efectuat cu succes");
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  router.route("/getAll").get(async (req, res, next) => {
    try {
      const response = await useCases.getAllObjects("Clinici");
      res.status(200).send(JSON.stringify(response));
    } catch (error) {
      next(error);
    }
  });
  return router;
};
