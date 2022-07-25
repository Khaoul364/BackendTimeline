const express = require('express');
const {createTask, showTasks, deleteTask, updateTask, showOneTask} = require("../controllers/task.controller");
const router = express.Router();

// /tasks
router.post("/add", createTask)
router.get("/list", showTasks)
router.get("/show/:id" , showOneTask )
router.delete('/delete/:id', deleteTask);
router.put("/update/:id" , updateTask )

module.exports = router;