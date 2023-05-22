const buildDocument=(documentValidator) => {
    return({
        document_id,
        nume_document,
        tip_document,
        link_fisier,
        document_pacient_id,
        document_clinica_id,
        document_programare_id,
    }={}) => {
        let {error} = documentValidator({
            document_id,
            nume_document,
            tip_document,
            link_fisier,
            document_pacient_id,
            document_clinica_id,
            document_programare_id,
        });
        if(error) throw new Error(error);

        return {
           getDocumentId: () => document_id,
           getNumeDocument: () => nume_document,
           getTipDocument: () => tip_document,
           getLinkFisier: () => link_fisier,
           getDocumentPacientId: () => document_pacient_id,
           getDocumentClinicaId: () => document_clinica_id,
           getDocumentProgamareId: () => document_programare_id,
        };
    };
};

module.exports =buildDocument;