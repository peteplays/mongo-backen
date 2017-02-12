var mongoose = require("mongoose"),
    db       = 'patients',
    col      = 'docs';

mongoose.connect('mongodb://localhost:27017/'+db);
var mongoSchema   = mongoose.Schema,
    patientSchema = {
    "receiveDate" : String,
    "receiptDate" : String,
    "patient" : {
        "drugs" : [
            {
                "autorizationNumber" : String,
                "DosageText" : String,
                "medicinalProduct" : String,
                "drugIndication" : String,
                _id: false
            }
        ],
        "reaction" : [
            {
                "meddraPrimaryTerm" : String,
                _id: false
            }
        ],
        "age" : String,
        "sex" : String,
        _id: false
    },
    "safetyReportId" : String,
    "companyNumber" : String
};
module.exports = mongoose.model(col, patientSchema);
