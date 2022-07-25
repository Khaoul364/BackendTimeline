const { Module } = require("../models/module.model");


module.exports = {
    
    createModule: async (req, res) => {
        const modules = new Module(req.body);

        await modules.save();
        res.json("/modules/list");
    },
    showModules: async (req, res) => {
        const modules = await Module.find();
        res.send(modules);
    },
    
    updateModule : async (req, res) => {
        const module = await Module.findById(req.params.id);
        console.log(req.body)
        module.ModuleName = req.body.ModuleName;
        module.ModuleDescription = req.body.ModuleDescription;
        module.priority = req.body.priority;
        module.Responsable = req.body.Responsable;



        

     

   
        await module.save();
        console.log(module);
        res.json("/modules/list");
    },

    deleteModule: async (req, res)=>{
        const { id } = req.params;
        await Module.remove ( { _id: id});
        res.json ("/modules/list")
    }

}