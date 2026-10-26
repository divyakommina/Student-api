const connection = require("../db");


const addStudent = (req,res)=>{
    const {id,name,age,gender}= req.body;

    if(id ==0 || name==undefined || age==undefined || gender==undefined){
        res.send("Please enter all the details");
        return;
    }
    const query = "INSERT into students (id,name,age,gender) values(?,?,?,?)";

    connection.query(query,[id,name,age,gender], (err,result)=>{
        if(err){
            res.send("error in entering details...")
        }
        res.send("student details added successfully");
    })

};

const getStudents = (req,res)=>{
    connection.query("select *from students",
        (err,result)=>{
            if(err){
                res.send(err.message);
            }
            res.json({students:result})
        }
    )
};


//update student by id
const updateStudent = (req,res)=>{
    const {id,name,age,gender} = req.body;
}
module.exports = {getStudents,addStudent,updateStudent};