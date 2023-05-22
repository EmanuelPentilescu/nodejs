const express = require("express");

module.exports = function reviewPersonalMedicalRoute(controller, model) {
  const router = express.Router();

  router.route("/").get(async (req, res, next) => {
    try {
      const getReviewPersonalMedicalReq =
        model.buildGetReviewPersonalMedicalReq({
          review_id: req.query.review_id,
        });
      const response = await controller.getObject(
        "Review Personal Medical",
        "review_id",
        getReviewPersonalMedicalReq.getReviewId()
      );
      res.status(200).send(JSON.stringify(response));
    } catch (error) {
      next(error);
    }
  });

  router.route("/").post(async (req, res, next) => {
    try {
      const review = model.buildCreateReviewPersonalMedicalReq(req.body);
      await controller.addIntoDatabase("Review Personal Medical", {
        nota: review.getNota(),
        comentariu: review.getComentariu(),
        pacient_id: review.getPacientId(),
        personal_medical_id: review.getPersonalMedicalId(),
      });
      res
        .status(200)
        .send("Review-ul personalului medical a fost adaugat cu succes");
    } catch (error) {
      next(error);
    }
  });

  router.route("/").put(async (req, res, next) => {
    try {
      const updateReviewPersonalMedical =
        model.buildUpdateReviewPersonalMedicalReq(req.body);
      console.log(updateReviewPersonalMedical.getReviewId());
      await controller.updateOneObject(
        "Review Personal Medical",
        "review_id",
        updateReviewPersonalMedical.getReviewId(),
        {
          review_id: updateReviewPersonalMedical.getReviewId(),
          nota: updateReviewPersonalMedical.getNota(),
          comentariu: updateReviewPersonalMedical.getComentariu(),
          pacient_id: updateReviewPersonalMedical.getPacientId(),
          personal_medical_id:
            updateReviewPersonalMedical.getPersonalMedicalId(),
        }
      );

      res
        .status(200)
        .send("Review-ul personalului medical a fost modificat cu succes");
    } catch (error) {
      next(error);
    }
  });

  router.route("/").delete(async (req, res, next) => {
    try {
      const deleteReviewPersonalMedical =
        model.buildDeleteReviewPersonalMedicalReq(req.body);
      await controller.deleteFromDatabase(
        "Review Personal Medical",
        "review_id",
        deleteReviewPersonalMedical.getReviewId()
      );
      res
        .status(200)
        .send("Review-ul personalului medical a fost sters cu succes");
    } catch (error) {
      next(error);
    }
  });

  router.route("/getAll").get(async (req, res, next) => {
    try {
      const response = await controller.getAllObjects(
        "Review Personal Medical"
      );
      res.status(200).send(JSON.stringify(response));
    } catch (error) {
      next(error);
    }
  });
  return router;
};
