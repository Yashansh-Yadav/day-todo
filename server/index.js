const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')


const db =  mysql.createPool({
host: "localhost",
database :'mytodo',
user: 'root',
password :'password',
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/api/get" , (req,res)=>{
    const sqlSelect = "SELECT * FROM mytodos"
    db.query(sqlSelect , (err ,result)=>{
        if(err) throw err;
        res.send(result);
    });
});

app.post("/api/insert", (req ,res)=>{
    
    // insert..............................

    const todoTitle = req.body.todoTitle
    const todoDesc = req.body.todoDesc
    const todoDate = req.body.todoDate
    const todoTime = req.body.todoTime
    const todoId = req.body.todoId

    const sqlInsert = "INSERT INTO mytodos(todoTitle , todoDesc , todoDate ,todoTime ,todoId) VALUE(?,?,?,?,?)"
    db.query(sqlInsert , [ todoTitle , todoDesc , todoDate ,todoTime ,todoId] , (err ,result)=>{
        console.log(result ,err)
    })
})

app.delete("/api/delete/:PickTodo",(req,res)=>{
    const todelete = req.params.PickTodo;
    const sqlDelete = "DELETE FROM mytodos WHERE sno = ?"
    db.query(sqlDelete , todelete , (err , result)=>{
        if(err) throw err;
    })
})


app.listen(3001 , ()=>{
    console.log("Running on server 3001");
});
