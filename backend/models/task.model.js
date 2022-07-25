const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskTitle: String,
    taskDescription: String,
    status: String,
    severity: Number,
    priority: Number,
});

const Task = mongoose.model("task", taskSchema);

module.exports = { Task };