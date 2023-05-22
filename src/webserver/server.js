const express = require("express");
const cors = require("cors");

module.exports = function server(useCases, model) {
  const routesImport = require("./allRoutes");
  const app = express();
  app.use(express.json());
  app.use(cors());

  const PORT = 5800;
  // route imports

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      error: {
        status: err.status || 500,
        message: err.message,
      },
    });
  });

  const routes = routesImport(useCases, model);
  app.use("/pacient", routes.pacientRoute);
  app.use("/clinica", routes.clinicaRoute);
  app.use("/", routes.mainRoute);
  app.use("/auth", routes.authRoute);
  app.use("/proceduri", routes.proceduraRoute);
  app.use("/personalmedical", routes.personalMedicalRoute);
  app.use("/review_personal_medical", routes.reviewPersonalMedicalRoute);
  app.use("/review_clinica", routes.reviewClinicaRoute);
  app.use("/document", routes.documentRoute);
  app.use("/programare", routes.programareRoute);
  function run() {
    app.listen(PORT, () => {
      console.log(`up and running on ${PORT}`);
    });
  }

  return { run };
};
