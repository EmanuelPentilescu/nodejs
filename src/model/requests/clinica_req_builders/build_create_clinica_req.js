const buildCreateClinicaReq = (createClinicaReqValidator) => {
  return ({
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
    let { error } = createClinicaReqValidator({
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

module.exports = buildCreateClinicaReq;
