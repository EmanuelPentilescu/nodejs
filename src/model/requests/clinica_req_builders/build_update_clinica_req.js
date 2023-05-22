const buildClinica = (clinicaValidator) => {
  return ({
    clinicaId,
    nume,
    adresa,
    oras,
    codPostal,
    numarTelefon,
    programLucru,
    descriere,
    listaProceduri,
    listaPersonalMedical,
  } = {}) => {
    let { error } = clinicaValidator({
      clinicaId,
      nume,
      adresa,
      oras,
      codPostal,
      numarTelefon,
      programLucru,
      descriere,
      listaProceduri,
      listaPersonalMedical,
    });
    if (error) throw new Error(error);

    return {
      getClinicaId: () => clinicaId,
      getNume: () => nume,
      getAdresa: () => adresa,
      getOras: () => oras,
      getCodPostal: () => codPostal,
      getNumarTelefon: () => numarTelefon,
      getProgramLucru: () => programLucru,
      getListaProceduri: () => listaProceduri,
      getDescriere: () => descriere,
      getListaPersonalMedical: () => listaPersonalMedical,
    };
  };
};

module.exports = buildClinica;
