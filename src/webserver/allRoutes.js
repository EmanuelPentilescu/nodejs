function allRoutes(useCases, model) {
  const mainRouteImport = require("./routes/mainRoute");
  const pacientRouteImport = require("./routes/pacientRoute");
  const clinicaRouteImport = require("./routes/clinicaRoute");
  const authRouteImport = require("./routes/authRoute");
  const proceduraRouteImport = require("./routes/proceduraRoute");
  const personalMedicalImport = require("./routes/personalMedicalRoute");
  const reviewPersonalMedicalImport = require("./routes/reviewPersonalMedical");
  const reviewClinicaImport = require("./routes/reviewClinicaRoute");
  const documentRouteImport = require("./routes/documentRoute");
  const programariRouteImport = require("./routes/programareRoute");
  return {
    mainRoute: mainRouteImport(useCases, model),
    pacientRoute: pacientRouteImport(useCases, model),
    clinicaRoute: clinicaRouteImport(useCases, model),
    authRoute: authRouteImport(useCases, model),
    proceduraRoute: proceduraRouteImport(useCases, model),
    personalMedicalRoute: personalMedicalImport(useCases, model),
    reviewPersonalMedicalRoute: reviewPersonalMedicalImport(useCases, model),
    reviewClinicaRoute: reviewClinicaImport(useCases, model),
    documentRoute: documentRouteImport(useCases, model),
    programareRoute: programariRouteImport(useCases, model),
  };
}

module.exports = allRoutes;
