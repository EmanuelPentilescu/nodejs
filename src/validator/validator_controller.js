const Joi = require("joi");

const JoiValidator = (payload, schema) => {
  const { error } = schema.validate(payload);
  if (error) {
    const message = error.details.map((el) => el.message).join("\n");
    return {
      error: message,
    };
  }
  return true;
};

module.exports = function validator_controller() {
  // object schemas
  const pacient_schema = require("./joi/schemas/objects/pacient_schema");
  const clinica_schema = require("./joi/schemas/objects/clinica_schema");
  const procedura_schema= require("./joi/schemas/objects/procedura_schema");
  const personal_medical_schema=require("./joi/schemas/objects/personal_medical_schema");
  const review_personal_medical_schema= require("./joi/schemas/objects/review_personal_medical_schema");
  const review_clinica_schema= require("./joi/schemas/objects/review_clinica_schema");
  const document_schema= require("./joi/schemas/objects/document_schema");
  const programare_schema= require("./joi/schemas/objects/programare_schema");
  //request schemas
  const register_schema = require("./joi/schemas/requests/auth_req_schemas/register_schema");

  //clinica requests schemas
  const create_clinica_req_schema = require("./joi/schemas/requests/clinica_req_schemas/create_clinica_req_schema");
  const get_clinica_req_schema = require("./joi/schemas/requests/clinica_req_schemas/get_clinica_req_schema");
  const delete_clinica_req_schema = require("./joi/schemas/requests/clinica_req_schemas/delete_clinica_req_schema");
  const update_clinica_req_schema = require("./joi/schemas/requests/clinica_req_schemas/update_clinica_req_schema");

  //pacient requests schemas
  const create_pacient_req_schema = require("./joi/schemas/requests/pacient_req_schemas/create_pacient_req_schema");
  const get_pacient_req_schema = require("./joi/schemas/requests/pacient_req_schemas/get_pacient_req_schema");
  const delete_pacient_req_schema = require("./joi/schemas/requests/pacient_req_schemas/delete_pacient_req_schema");
  const update_pacient_req_schema = require("./joi/schemas/requests/pacient_req_schemas/update_pacient_req_schema");
  
  //procedura requests schemas
  const create_procedura_req_schema= require("./joi/schemas/requests/procedura_req_schema/create_procedura_req_schema");
  const get_procedura_req_schema   = require("./joi/schemas/requests/procedura_req_schema/get_procedura_req_schema");
  const delete_procedura_req_schema= require("./joi/schemas/requests/procedura_req_schema/delete_procedura_req_schema");
  const update_procedura_req_schema= require("./joi/schemas/requests/procedura_req_schema/update_procedura_req_schema");
 
  //personal medical requests schemas
  const create_personal_medical_req_schema= require("./joi/schemas/requests/personal_medical_req_schema/create_personal_medical_req_schema");
  const get_personal_medical_req_schema   = require("./joi/schemas/requests/personal_medical_req_schema/get_personal_medical_req_schema");
  const delete_personal_medical_req_schema= require("./joi/schemas/requests/personal_medical_req_schema/delete_personal_medical_req_schema");
  const update_personal_medical_req_schema= require("./joi/schemas/requests/personal_medical_req_schema/update_personal_medical_req_schema");

  //review personal medical request schemas
  const create_review_personal_medical_req_schema= require("./joi/schemas/requests/review_personal_medical_req_schema/create_review_personal_medical_req_schema");
  const get_review_personal_medical_req_schema= require("./joi/schemas/requests/review_personal_medical_req_schema/get_review_personal_medical_req_schema");
  const delete_review_personal_medical_req_schema= require("./joi/schemas/requests/review_personal_medical_req_schema/delete_review_personal_medical_req_schema");
  const update_review_personal_medical_req_schema= require("./joi/schemas/requests/review_personal_medical_req_schema/update_review_personal_medical_req_schema");

  //review clinica req schemas
  const create_review_clinica_req_schema= require("./joi/schemas/requests/review_clinica_req_schemas/create_review_clinica_req_schema");
  const delete_review_clinica_req_schema= require("./joi/schemas/requests/review_clinica_req_schemas/delete_review_clinica_req_schema");
  const get_review_clinica_req_schema= require("./joi/schemas/requests/review_clinica_req_schemas/get_review_clinica_req_schema");
  const update_review_clinica_req_schema= require("./joi/schemas/requests/review_clinica_req_schemas/update_review_clinica_req_schema");

  //document req schemas
  const create_document_req_schema= require("./joi/schemas/requests/document_req_schemas/create_document_req_schema");
  const delete_document_req_schema= require("./joi/schemas/requests/document_req_schemas/delete_document_req_schema");
  const get_document_req_schema= require("./joi/schemas/requests/document_req_schemas/get_document_req_schema");
  const update_document_req_schema= require("./joi/schemas/requests/document_req_schemas/update_document_req_schema");

  //programare req schemas
  const create_programare_req_schema=require("./joi/schemas/requests/programare_req_schemas/create_programare_req_schema");
  const get_programare_req_schema=require("./joi/schemas/requests/programare_req_schemas/get_programare_req_schema");
  const update_programare_req_schema=require("./joi/schemas/requests/programare_req_schemas/update_programare_req_schema");
  const delete_programare_req_schema=require("./joi/schemas/requests/programare_req_schemas/delete_programare_req_schema");
  return {
    //objects validator
    pacientValidator: (payload) => JoiValidator(payload, pacient_schema),
    clinicaValidator: (payload) => JoiValidator(payload, clinica_schema),
    proceduraValidator: (payload) => JoiValidator(payload,procedura_schema),
    personalMedicalValidator: (payload) => JoiValidator(payload, personal_medical_schema),
    reviewPersonalMedicalValidator: (payload) => JoiValidator(payload,review_personal_medical_schema),
    reviewClinicaValidator: (payload) => JoiValidator(payload,review_clinica_schema),
    documentValidator: (payload) => JoiValidator(payload,document_schema),
    programareValidator: (payload) => JoiValidator(payload,programare_schema),

    registerReqValidator: (payload) => JoiValidator(payload, register_schema),

    //clinica req validator
    createClinicaReqValidator: (payload) =>
      JoiValidator(payload, create_clinica_req_schema),
    getClinicaReqValidator: (payload) =>
      JoiValidator(payload, get_clinica_req_schema),
    deleteClinicaReqValidator: (payload) =>
      JoiValidator(payload, delete_clinica_req_schema),
    updateClinicaReqValidator: (payload) =>
      JoiValidator(payload, update_clinica_req_schema),

    //pacient req validator
    createPacientReqValidator: (payload) =>
      JoiValidator(payload, create_pacient_req_schema),
    getPacientReqValidator: (payload) =>
      JoiValidator(payload, get_pacient_req_schema),
    deletePacientReqValidator: (payload) =>
      JoiValidator(payload, delete_pacient_req_schema),
    updatePacientReqValidator: (payload) =>
      JoiValidator(payload, update_pacient_req_schema),

    //procedura req validator
    createProceduraReqValidator: (payload) =>
      JoiValidator(payload,create_procedura_req_schema),
    getProceduraReqValidator: (payload) =>
      JoiValidator(payload,get_procedura_req_schema),
    deleteProceduraReqValidator: (payload) => 
      JoiValidator(payload,delete_procedura_req_schema),
    updateProceduraReqValidator: (payload) => 
      JoiValidator(payload,update_procedura_req_schema),  

    //personal medical req validator
    createPersonalMedicalReqValidator: (payload) =>
      JoiValidator(payload, create_personal_medical_req_schema),
    getPersonalMedicalReqValidator: (payload) =>
      JoiValidator(payload,get_personal_medical_req_schema),
    deletePersonalMedicalReqValidator: (payload) =>
      JoiValidator(payload, delete_personal_medical_req_schema),
    updatePersonalMedicalReqValidator: (payload) =>
      JoiValidator(payload, update_personal_medical_req_schema),

    //review personal medical req validator
    createReviewPersonalMedicalReqValidator: (payload) =>
      JoiValidator(payload,create_review_personal_medical_req_schema),
    getReviewPersonalMedicalReqValidator : (payload) => 
      JoiValidator(payload,get_review_personal_medical_req_schema),
    deleteReviewPersonalMedicalReqValidator: (payload) =>
      JoiValidator(payload,delete_review_personal_medical_req_schema),
    updateReviewPersonalMedicalReqValidator: (payload) =>
      JoiValidator(payload, update_review_personal_medical_req_schema),
    
    //review clinica req validator
    createReviewClinicaReqValidator: (payload) =>
      JoiValidator(payload,create_review_clinica_req_schema),
    getReviewClinicaReqValidator: (payload) =>
      JoiValidator(payload, get_review_clinica_req_schema),
    deleteReviewClinicaReqValidator: (payload) => 
      JoiValidator(payload,delete_review_clinica_req_schema),
    updateReviewClinicaReqValidator: (payload) => 
      JoiValidator(payload, update_review_clinica_req_schema),

    //document req validator
    createDocumentReqValidator: (payload) =>
      JoiValidator(payload, create_document_req_schema),
    getDocumentReqValidator: (payload) =>
      JoiValidator(payload,get_document_req_schema),
    deleteDocumentReqValidator: (payload) =>
      JoiValidator(payload,delete_document_req_schema),
    updateDocumentReqValidator: (payload) =>
      JoiValidator(payload,update_document_req_schema),  

    //programare req validator
    createProgramareReqValidator: (payload) =>
      JoiValidator(payload,create_programare_req_schema),
    getProgramareReqValidator: (payload) =>
      JoiValidator(payload,get_programare_req_schema),
    deleteProgramareReqValidator: (payload) =>
      JoiValidator(payload,delete_programare_req_schema),
    updateProgramareReqValidator: (payload) =>
      JoiValidator(payload,update_programare_req_schema),
  };
};
