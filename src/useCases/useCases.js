module.exports = function useCases(dataController) {
  const addClinica = require("./clinica/addClinica");
  const deleteClinica = require("./clinica/deleteClinica");
  const updateClinica = require("./clinica/updateClinica");

  const addPacient = require("./pacient/addPacient");
  const readPacient = require("./pacient/readPacient");
  const deletePacient = require("./pacient/deletePacient");
  const updatePacient = require("./pacient/updatePacient");
  const getAllPacientiFromClinica = require("./pacient/getAllPacientiFromClinica");

  const addPersonalMedical = require("./personalMedical/addPersonalMedical");
  const deletePersonalMedical = require("./personalMedical/deletePersonalMedical");
  const readPersonalMedical = require("./personalMedical/readPersonalMedical");
  const updatePersonalMedical = require("./personalMedical/updatePersonalMedical");

  const addProcedura = require("./procedura/addProcedura");
  const readProcedura = require("./procedura/readProcedura");
  const updateProcedura = require("./procedura/updateProcedura");
  const deleteProcedura = require("./procedura/deleteProcedura");

  const addProgramare = require("./programare/addProgramare");
  const readProgramare = require("./programare/readProgramare");
  const updateProgramare = require("./programare/updateProgramare");
  const deleteProgramare = require("./programare/deleteProgramare");

  const addDocument = require("./documente/addDocument");
  const deleteDocument = require("./documente/deleteDocument");
  return {
    addClinicaUseCase: (requestObject) =>
      addClinica(dataController, requestObject),
    deleteClinicaUseCase: (requestObject) =>
      deleteClinica(dataController, requestObject),
    updateClinicaUseCase: (requestObject) =>
      updateClinica(dataController, requestObject),

    addPacienteUseCase: (requestObject) =>
      addPacient(dataController, requestObject),
    readPacientUseCase: (requestObject) =>
      readPacient(dataController, requestObject),
    deletePacientUseCase: (requestObject) =>
      deletePacient(dataController, requestObject),
    updatePacientUseCase: (requestObject) =>
      updatePacient(dataController, requestObject),
    getAllPacientiFromClinicaUseCase: (requestObject) =>
      getAllPacientiFromClinica(dataController, requestObject),

    addPersonalMedicalUseCase: (requestObject) =>
      addPersonalMedical(dataController, requestObject),
    readPersonalMedicalUseCase: (requestObject) =>
      readPersonalMedical(dataController, requestObject),
    deletePersonalMedicalUseCase: (requestObject) =>
      deletePersonalMedical(dataController, requestObject),
    updatePersonalMedicalUseCase: (requestObject) =>
      updatePersonalMedical(dataController, requestObject),

    addProceduraUseCase: (requestObject) =>
      addProcedura(dataController, requestObject),
    readProceduraUseCase: (requestObject) =>
      readProcedura(dataController, requestObject),
    updateProceduraUseCase: (requestObject) =>
      updateProcedura(dataController, requestObject),
    deleteProceduraUseCase: (requestObject) =>
      deleteProcedura(dataController, requestObject),

    addProgramareUseCase: (requestObject) =>
      addProgramare(dataController, requestObject),
    readProgramareUseCase: (requestObject) =>
      readProgramare(dataController, requestObject),
    updateProgramareUseCase: (requestObject) =>
      updateProgramare(dataController, requestObject),
    deleteProgramareUseCase: (requestObject) =>
      deleteProgramare(dataController, requestObject),

    addDocumentUseCase: (requestObject) =>
      addDocument(dataController, requestObject),
    deleteDocumentUseCase: (requestObject) =>
      deleteDocument(dataController, requestObject),
  };
};
