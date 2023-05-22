const buildUpdatePacientReq = (updatePacientReqValidator) => {
  return ({ pacientId, nume, prenume, numarTelefon, adresaEmail } = {}) => {
    let { error } = updatePacientReqValidator({
      pacientId,
      nume,
      prenume,
      numarTelefon,
      adresaEmail,
    });
    if (error) throw new Error(error);
    return {
      getPacientId: () => pacientId,
      getNume: () => nume,
      getPrenume: () => prenume,
      getNumarTelefon: () => numarTelefon,
      getAdresaEmail: () => adresaEmail,
    };
  };
};

module.exports = buildUpdatePacientReq;
