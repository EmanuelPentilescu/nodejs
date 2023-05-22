const buildDeletePersonalMedicalReq = (deletePersonalMedicalReqValidator) => {
  return ({ personalMedicalId } = {}) => {
    let { error } = deletePersonalMedicalReqValidator({
      personalMedicalId,
    });
    if (error) throw new Error(error);

    return {
      getPersonalMedicalId: () => personalMedicalId,
    };
  };
};

module.exports = buildDeletePersonalMedicalReq;
