import express from "express";

import {
    getEmployee,
    createEmployee,
    editEmployee,
    deleteEmployee
    
}from "../controller/employee.js";

const router = express.Router();

router.get("/" , getEmployee);
router.post("/", createEmployee);
router.put("/", editEmployee);
router.delete("/:id",deleteEmployee)

export default router;
