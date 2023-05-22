module.exports = async function adaugaPacient(dataController, requestObject) {
  const response = await dataController.addIntoDatabase("Pacienti", {
    nume: requestObject.getNume(),
    prenume: requestObject.getPrenume(),
    numarTelefon: requestObject.getNumarTelefon(),
    adresaEmail: requestObject.getAdresaEmail(),
  });
  return response;
};
