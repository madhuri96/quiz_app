const mongoose=require("mongoose");

/** question model */
const schema = mongoose.Schema({
    questions: { type : Array, default: []}, // create question with [] default value
    answers : { type : Array, default: []},
    createdAt: { type: Date, default: Date.now },
});

module.export = mongoose.model('Question', schema);
