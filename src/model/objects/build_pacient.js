const buildPacient = (pacientValidator) => {
  return ({ id, nume, prenume, numar_telefon, adresa_email } = {}) => {
    let { error } = pacientValidator({
      id,
      nume,
      prenume,
      numar_telefon,
      adresa_email,
    });
    if (error) throw new Error(error);
    return {
      getPacientId: () => id,
      getNume: () => nume,
      getPrenume: () => prenume,
      getNumarTelefon: () => numar_telefon,
      getAdresaEmail: () => adresa_email,
    };
  };
};

module.exports = buildPacient;
