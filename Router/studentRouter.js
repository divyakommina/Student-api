const router = require("express").Router();
const {getStudents,addStudent} = require("../controller/studentController");


router.get("/students", getStudents);
router.post("/addstudents", addStudent);

module.exports = router;
