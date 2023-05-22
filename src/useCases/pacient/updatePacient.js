module.exports = async function updatePacient(dataController, requestObject) {
  return await dataController.updateOneObject(
    "Pacienti",
    "pacientId",
    requestObject.getPacientId(),
    {
      pacientId: requestObject.getPacientId(),
      nume: requestObject.getNume(),
      prenume: requestObject.getPrenume(),
      numarTelefon: requestObject.getNumarTelefon(),
      adresaEmail: requestObject.getAdresaEmail(),
    }
  );
};
