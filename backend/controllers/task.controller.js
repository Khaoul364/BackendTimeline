const { Task } = require("../models/task.model");

module.exports = {

    createTask: async (req, res) => {
        try{
            const task = new Task(req.body);

            await task.save();
            res.json("/tasks/list");
        } catch{
            console.log(err);
        }

    },

    showTasks: async (req, res) => {
        try{
            const tasks = await Task.find();
            res.send(tasks);
        } catch {
            console.log(err);
        }

    },

    showOneTask: async (req, res) => {
        const task = await Task.findById(req.params.id);
        res.send(task);
    },

    deleteTask: async (req,res)=>{
        const { id } = req.params;
        await Task.remove({ _id: id });
        res.redirect('/tasks/list');
    },

    updateTask : async (req, res) => {
        const task = await Task.findById(req.params.id);
        console.log(req.body)
        task.taskTitle = req.body.taskTitle;
        task.taskDescription = req.body.taskDescription;
        task.status = req.body.status;
        task.severity = req.body.severity;
        task.priority = req.body.priority;

        await task.save();
        res.redirect("/tasks/list");
    },



}
