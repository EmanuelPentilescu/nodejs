const buildCreatePacientReq = (createPacientReqValidator) => {
  return ({ nume, prenume, numarTelefon, adresaEmail } = {}) => {
    let { error } = createPacientReqValidator({
      nume,
      prenume,
      numarTelefon,
      adresaEmail,
    });
    if (error) throw new Error(error);
    return {
      getNume: () => nume,
      getPrenume: () => prenume,
      getNumarTelefon: () => numarTelefon,
      getAdresaEmail: () => adresaEmail,
    };
  };
};

module.exports = buildCreatePacientReq;
