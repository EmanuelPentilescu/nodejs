module.exports = async function addPersonalMedical(
  dataController,
  requestObject
) {
  return await dataController.addIntoDatabase("Personal Medical", {
    nume: requestObject.getNume(),
    prenume: requestObject.getPrenume(),
    experienta: requestObject.getExperienta(),
    linkPoza: requestObject.getLinkPoza(),
    tip: requestObject.getTip(),
    descriere: requestObject.getDescriere(),
    listaProceduri: requestObject.getListaProceduri(),
    clinicaId: requestObject.getClinicaId(),
  });
};
