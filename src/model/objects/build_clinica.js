const buildClinica = (clinicaValidator) => {
  return ({
    clinica_id,
    nume,
    adresa,
    oras,
    cod_postal,
    numar_telefon,
    program_lucru,
    descriere,
    lista_proceduri,
    lista_personal_medical,
  } = {}) => {
    let { error } = clinicaValidator({
      clinica_id,
      nume,
      adresa,
      oras,
      cod_postal,
      numar_telefon,
      program_lucru,
      descriere,
      lista_proceduri,
      lista_personal_medical,
    });
    if (error) throw new Error(error);

    return {
      getClinicaId: () => clinica_id,
      getNume: () => nume,
      getAdresa: () => adresa,
      getOras: () => oras,
      getCodPostal: () => cod_postal,
      getNumarTelefon: () => numar_telefon,
      getProgramLucru: () => program_lucru,
      getListaProceduri: () => lista_proceduri,
      getDescriere: () => descriere,
      getListaPersonalMedical: () => lista_personal_medical,
    };
  };
};

module.exports = buildClinica;
