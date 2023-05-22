const express = require("express");

module.exports = function authRoute(controller, model) {
  const router = express.Router();
  router.route("/login").get(async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  });

  router.route("/register").post(async (req, res, next) => {
    try {
      const registerReqObj = model.buildRegisterReq(req.body);
      const response = await controller.register({
        email: registerReqObj.getEmail(),
        password: registerReqObj.getParola(),
      });
      if (response == true)
        res.status(200).send("Inregistrarea s-a produs cu success");
      else throw Error("S-a produs o eroare la inregistrare");
    } catch (error) {
      next(error);
    }
  });

  return router;
};
