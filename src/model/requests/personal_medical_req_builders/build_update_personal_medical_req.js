const buildUpdatePersonalMedicalReq = (updatePersonalMedicalReqValidator) => {
  return ({
    personalMedicalId,
    nume,
    prenume,
    experienta,
    linkPoza,
    tip,
    descriere,
    listaProceduri,
    clinicaId,
  } = {}) => {
    let { error } = updatePersonalMedicalReqValidator({
      personalMedicalId,
      nume,
      prenume,
      experienta,
      linkPoza,
      tip,
      descriere,
      listaProceduri,
      clinicaId,
    });
    if (error) throw new Error(error);

    return {
      getPersonalMedicalId: () => personalMedicalId,
      getNume: () => nume,
      getPrenume: () => prenume,
      getExperienta: () => experienta,
      getLinkPoza: () => linkPoza,
      getTip: () => tip,
      getDescriere: () => descriere,
      getListaProceduri: () => listaProceduri,
      getClinicaId: () => clinicaId,
    };
  };
};

module.exports = buildUpdatePersonalMedicalReq;
