const express= require("express");
const buildDeleteClinicaReq = require("../../model/requests/clinica_req_builders/build_delete_clinica_req");

module.exports= function reviewClinicaRoute(controller,model){
    const router= express.Router();

    router.route("/").get(async (req,res,next) => {
        try {
            const buildGetReviewClinicaReq = model.buildGetReviewClinicaReq({
                review_clinica_id: req.query.reviewClinicaId,
            });
            const response=await controller.getObject(
                "Review Clinica",
                "review_id",
                buildGetReviewClinicaReq.getReviewClinicaId()
            );

            res.status(200).send(JSON.stringify(response));
        } catch (error) {
            next(error);
        }
    });

    router.route("/").post(async (req,res,next) => {
        try {
            const reviewClinica= model.buildCreateReviewClinicaReq(req.body);
            await controller.addIntoDatabase(
                "Review Clinica",
                {
                nota: reviewClinica.getNota(),
                comentariu: reviewClinica.getComentariu(),
                pacient_id: reviewClinica.getPacientId(),
                clinica_id: reviewClinica.getClinicaId()
            });

            res.status(200).send("Review-ul clinicii a fost adaugat cu succes");
        } catch (error) {
            next(error);
        }
    });


    router.route("/").put(async (req,res,next) => {
        try {
            const updateReviewClinica = model.buildUpdateReviewClinicaReq(req.body);
            await controller.updateOneObject(
                "Review Clinica",
                "review_id",
                updateReviewClinica.getReviewClinicaId(),
                {
                    review_id: updateReviewClinica.getReviewClinicaId(),
                    nota: updateReviewClinica.getNota(),
                    comentariu: updateReviewClinica.getComentariu(),
                    pacient_id: updateReviewClinica.getPacientId(),
                    clinica_id: updateReviewClinica.getClinicaId()
                }
            );
            res.status(200).send("Review-ul clinicii a folst actualizat cu succes");
        } catch (error) {
            next(error);
        }
    });

    router.route("/").delete(async (req,res,next)=>{
        try {
            const deleteReviewClinica= model.buildDeleteReviewClinicaReq({
                review_clinica_id: req.query.reviewClinicaId,
            });
            await controller.deleteFromDatabase(
                "Review Clinica",
                "review_id",
                deleteReviewClinica.getReviewClinicaId()
            )

            res.status(200).send("Review-ul clinicii a fost sters cu sucees");
        } catch (error) {
            next(error);
        }
    });
    router.route("/getAll").get(async (req, res, next) => {
        try {
          const response = await controller.getAllObjects("Review Clinica");
          res.status(200).send(JSON.stringify(response));
        } catch (error) {
          next(error);
        }
      });
    return router;
}