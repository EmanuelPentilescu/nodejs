const buildDeleteClinicaReq = (clinicaValidator) => {
  return ({ clinicaId } = {}) => {
    let { error } = clinicaValidator({
      clinicaId,
    });
    if (error) throw new Error(error);

    return {
      getClinicaId: () => clinicaId,
    };
  };
};

module.exports = buildDeleteClinicaReq;
