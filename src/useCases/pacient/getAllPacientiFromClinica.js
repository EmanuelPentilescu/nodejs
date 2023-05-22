module.exports = async function getAllPacientiFromClinica(
  dataController,
  requestObject
) {
  return await dataController.query(
    "SELECT * FROM Pacienti WHERE clinicaId = " +
      requestObject.getClinicaId() +
      ";"
  );
};
