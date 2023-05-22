module.exports = async function updateClinica(dataController, requestObject) {
  const response = await dataController.updateOneObject(
    "Clinici",
    "clinicaId",
    requestObject.getClinicaId(),
    {
      clinicaId: requestObject.getClinicaId(),
      nume: requestObject.getNume(),
      adresa: requestObject.getAdresa(),
      oras: requestObject.getOras(),
      codPostal: requestObject.getCodPostal(),
      numarTelefon: requestObject.getNumarTelefon(),
      programLucru: requestObject.getProgramLucru(),
      listaProceduri: requestObject.getListaProceduri(),
      descriere: requestObject.getDescriere(),
      listaPersonalMedical: requestObject.getListaPersonalMedical(),
    }
  );
  return response;
};
