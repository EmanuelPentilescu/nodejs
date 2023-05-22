const buildGetPersonalMedicalReq = (getPersonalMedicalReqValidator) => {
  return ({ personalMedicalId } = {}) => {
    let { error } = getPersonalMedicalReqValidator({
      personalMedicalId,
    });
    if (error) throw new Error(error);

    return {
      getPersonalMedicalId: () => personalMedicalId,
    };
  };
};

module.exports = buildGetPersonalMedicalReq;
