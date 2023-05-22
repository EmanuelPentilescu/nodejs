const { required } = require("joi");
const buildGetDocumentReq = require("./requests/document_req_builders/build_get_document_req");

module.exports = function allModels(validators) {
  const buildPacient = require("./objects/build_pacient");
  const buildClinica = require("./objects/build_clinica");
  const buildProcedura= require("./objects/build_procedura");
  const buildPersonalMedical= require("./objects/build_personal_medical");
  const buildReviewPersonalMedical= require("./objects/build_review_personal_medical");
  const buildReviewClinica = require("./objects/build_review_clinica");
  const buildDocument= require("./objects/build_document");
  const buildProgramare= require("./objects/build_programare");
  const buildRegisterReq = require("./requests/auth_req_builders/build_registerReq");

  // clinica request model
  const buildCreateClinicaReq = require("./requests/clinica_req_builders/build_create_clinica_req");
  const buildGetClinicaReq = require("./requests/clinica_req_builders/build_get_clinica_req");
  const buildDeleteClinicaReq = require("./requests/clinica_req_builders/build_delete_clinica_req");
  const buildUpdateClinicaReq = require("./requests/clinica_req_builders/build_update_clinica_req");

  //clinica request 
  const buildCreatePacientReq = require("./requests/pacient_req_builders/build_create_pacient_req");
  const buildGetPacientReq = require("./requests/pacient_req_builders/build_get_pacient_req");
  const buildDeletePacientReq = require("./requests/pacient_req_builders/build_delete_pacient_req");
  const buildUpdatePacientReq = require("./requests/pacient_req_builders/build_update_pacient_req");

  //procedura request 
  const buildCreateProceduraReq= require("./requests/procedura_req_builders/build_create_procedura_req");
  const buildGetProceduraReq   = require("./requests/procedura_req_builders/build_get_procedura_req");
  const buildDeleteProceduraReq= require("./requests/procedura_req_builders/build_delete_procedura_req");
  const buildUpdateProceduraReq= require("./requests/procedura_req_builders/build_update_procedura_req");

  //personal medical request
  const buildCreatePersonalMedicalReq= require("./requests/personal_medical_req_builders/build_create_personal_medical_req");
  const buildGetPersonalMedicalReq   = require("./requests/personal_medical_req_builders/build_get_personal_medical_req");
  const buildDeletePersonalMedicalReq=require("./requests/personal_medical_req_builders/build_delete_personal_medical_req");
  const buildUpdatePersonalMedicalReq= require("./requests/personal_medical_req_builders/build_update_personal_medical_req");

  //review personal medical request
  const buildCreateReviewPersonalMedicalReq= require("./requests/review_personal_medical_req_builders/build_create_review_personal_medical_req");
  const buildGetReviewPersonalMedicalReq = require("./requests/review_personal_medical_req_builders/build_get_review_personal_medical_req");
  const buildDeleteReviewPersonalMedicalReq= require("./requests/review_personal_medical_req_builders/build_delete_review_personal_medical_req");
  const buildUpdateReviewPersonalMedicalReq= require("./requests/review_personal_medical_req_builders/build_update_review_personal_medical_req");

  //review clinica request
  const buildCreateReviewClinicaReq = require("./requests/review_clinica_req_builders/build_create_review_clinica");
  const buildGetReviewClinicaReq = require("./requests/review_clinica_req_builders/build_get_review_clinica");
  const buildDeleteReviewClinicaReq= require("./requests/review_clinica_req_builders/build_delete_review_clinica");
  const buildUpdateReviewClinicaReq= require("./requests/review_clinica_req_builders/build_update_review_clinica");

  //document req
  const buildCreateDocumentReq= require("./requests/document_req_builders/build_create_document_req");
  const buildGetDocumentReq= require("./requests/document_req_builders/build_get_document_req");
  const buildUpdateDocumentReq= require("./requests/document_req_builders/build_update_document_req");
  const buildDeleteDocumentReq= require("./requests/document_req_builders/build_delete_document_req");
  
  //programare req
  const buildCreateProgramareReq= require("./requests/programare_req_builders/build_create_programare_req");
  const buildDeleteProgramareReq= require("./requests/programare_req_builders/build_delete_programare_req");
  const buildGetProgramareReq= require("./requests/programare_req_builders/build_get_programare_req");
  const buildUpdateProgramareReq= require("./requests/programare_req_builders/build_update_programare_req");

  return {
    // build objects
    buildPacient: buildPacient(validators.pacientValidator),
    buildClinica: buildClinica(validators.clinicaValidator),
    buildProcedura: buildProcedura(validators.proceduraValidator),
    buildPersonalMedical: buildPersonalMedical(validators.personalMedicalValidator),
    buildReviewPersonalMedical: buildReviewPersonalMedical(validators.reviewPersonalMedicalValidator),
    buildReviewClinica: buildReviewClinica(validators.reviewClinicaValidator),
    buildDocument: buildDocument(validators.documentValidator),
    buildProgramare: buildProgramare(validators.programareValidator),
    // build requests
    buildRegisterReq: buildRegisterReq(validators.registerReqValidator),

    // clinica builders req
    buildCreateClinicaReq: buildCreateClinicaReq(
      validators.createClinicaReqValidator
      ),
    buildGetClinicaReq: buildGetClinicaReq(
      validators.getClinicaReqValidator),
    buildDeleteClinicaReq: buildDeleteClinicaReq(
      validators.deleteClinicaReqValidator
    ),
    buildUpdateClinicaReq: buildUpdateClinicaReq(
      validators.updateClinicaReqValidator
    ),

    //pacient builders req
    buildCreatePacientReq: buildCreatePacientReq(
      validators.createPacientReqValidator
    ),
    buildGetPacientReq: buildGetPacientReq(validators.getPacientReqValidator),
    buildDeletePacientReq: buildDeletePacientReq(
      validators.deletePacientReqValidator
    ),
    buildUpdatePacientReq: buildUpdatePacientReq(
      validators.updatePacientReqValidator
    ),

    //procedura builder req
    buildCreateProceduraReq: buildCreateProceduraReq(
      validators.createProceduraReqValidator
    ),
    buildGetProceduraReq: buildGetProceduraReq(
      validators.getProceduraReqValidator
    ),
    buildDeleteProceduraReq: buildDeleteProceduraReq(
      validators.deleteProceduraReqValidator
    ),
    buildUpdateProceduraReq: buildUpdateProceduraReq(
      validators.updateProceduraReqValidator
    ),

    //personal medical req
    buildCreatePersonalMedicalReq: buildCreatePersonalMedicalReq(
      validators.createPersonalMedicalReqValidator
    ),
    buildGetPersonalMedicalReq: buildGetPersonalMedicalReq(
      validators.getPersonalMedicalReqValidator
    ),
    buildDeletePersonalMedicalReq: buildDeletePersonalMedicalReq(
      validators.deletePersonalMedicalReqValidator
    ),
    buildUpdatePersonalMedicalReq: buildUpdatePersonalMedicalReq(
      validators.updatePersonalMedicalReqValidator
    ),

    //review personal medical req
    buildCreateReviewPersonalMedicalReq: buildCreateReviewPersonalMedicalReq(
      validators.createReviewPersonalMedicalReqValidator
    ),
    buildGetReviewPersonalMedicalReq: buildGetReviewPersonalMedicalReq(
      validators.getReviewPersonalMedicalReqValidator
    ),
    buildDeleteReviewPersonalMedicalReq: buildDeleteReviewPersonalMedicalReq(
      validators.deleteReviewPersonalMedicalReqValidator
    ),
    buildUpdateReviewPersonalMedicalReq: buildUpdateReviewPersonalMedicalReq(
      validators.updateReviewPersonalMedicalReqValidator
    ),

    //review clinica req
    buildCreateReviewClinicaReq: buildCreateReviewClinicaReq(
      validators.createReviewClinicaReqValidator
    ),
    buildGetReviewClinicaReq: buildGetReviewClinicaReq(
      validators.getReviewClinicaReqValidator
    ),
    buildDeleteReviewClinicaReq: buildDeleteReviewClinicaReq(
      validators.deleteReviewClinicaReqValidator
    ),
    buildUpdateReviewClinicaReq: buildUpdateReviewClinicaReq(
      validators.updateReviewClinicaReqValidator
    ),

    //document req
    buildCreateDocumentReq: buildCreateDocumentReq(
      validators.createDocumentReqValidator
    ),
    buildUpdateDocumentReq: buildUpdateDocumentReq(

      validators.updateDocumentReqValidator
    ),
    buildGetDocumentReq: buildGetDocumentReq(
      validators.getDocumentReqValidator
    ),
    buildDeleteDocumentReq: buildDeleteDocumentReq(
      validators.deleteDocumentReqValidator
    ),

    //programare req
    buildCreateProgramareReq: buildCreateProgramareReq(
      validators.createProgramareReqValidator
    ),
    buildGetProgramareReq: buildGetProgramareReq(
      validators.getProgramareReqValidator
    ),
    buildDeleteProgramareReq: buildDeleteProgramareReq(
      validators.deleteProgramareReqValidator
    ),
    buildUpdateProgramareReq: buildUpdateProgramareReq(
      validators.updateProgramareReqValidator
    ),
  };
};
