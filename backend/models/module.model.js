const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
    ModuleName: String,
    ModuleDescription: String,
    priority: String,
    Responsable: String,  
    

       
});

const Module = mongoose.model("module", moduleSchema);

module.exports = { Module };