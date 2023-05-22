const buildCreatePersonalMedicalReq = (createPersonalMedicalReqValidator) => {
  return ({
    nume,
    prenume,
    experienta,
    linkPoza,
    tip,
    descriere,
    listaProceduri,
    clinicaId,
  } = {}) => {
    let { error } = createPersonalMedicalReqValidator({
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

module.exports = buildCreatePersonalMedicalReq;
