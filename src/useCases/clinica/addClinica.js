module.exports = async function addClinica(dataController, requestObject) {
  return await dataController.addIntoDatabase("Clinici", {
    nume: requestObject.getNume(),
    adresa: requestObject.getAdresa(),
    oras: requestObject.getOras(),
    codPostal: requestObject.getCodPostal(),
    numarTelefon: requestObject.getNumarTelefon(),
    programLucru: requestObject.getProgramLucru(),
    listaProceduri: requestObject.getListaProceduri(),
    descriere: requestObject.getDescriere(),
    listaPersonalMedical: requestObject.getListaPersonalMedical(),
  });
};
