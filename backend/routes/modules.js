const express = require("express");
const { createModule, showModules, updateModule, deleteModule } = require("../controllers/module.controller");
const router = express.Router();


router.post("/add", createModule)
router.get("/list", showModules)
router.put("/update/:id" , updateModule )
router.delete("/delete/:id" , deleteModule )




module.exports = router;