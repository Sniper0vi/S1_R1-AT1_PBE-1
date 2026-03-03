import createMulter from "../config/upload.multer.js";

const uploadFile = createMulter({
    pasta:'documents',
    tiposPermitidos: [
        'application/pdf',
        'application/msword', // .doc
       'application/vdnd.openxmlformats-officedocument.wordprossingml.document' //.docx
    ],
    tamanhoArquivo: 10 * 1024 * 1024
}).single('doc');

export default uploadFile;