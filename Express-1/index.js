const express=require('express')
const app=express()

app.use(express.json())

let students=[
    {
     "RollNo": 19733001,
     "Name": "A ABHISHEK GOUD",
     "College": "ABC",
     "Section": "3-CSE-A"
    },
    {
     "RollNo": 19733003,
     "Name": "AKULA VENKATA SAI SUMEDH",
     "College": "ABC",
     "Section": "3-CSE-A"
    },
    {
     "RollNo": 19733015,
     "Name": "D NEHA",
     "College": "PQR",
     "Section": "3-CSE-A"
    },
    {
     "RollNo": 19733047,
     "Name": "SAICHARAN NEELARENTA",
     "College": "PQR",
     "Section": "3-CSE-A"
    }
];

// student information based on college
app.post('/api/students/:college',(req,res)=>{
    const student=students.find(s=>s.College==req.params.college);

    if(!student) {
        res.status(404).send(`The student with the given college=${req.params.college} is not exist!!`)
    }
    res.send(student)
})

//the app is running on PORT number 3000
const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Express_demo app listening at http://localhost:${port}`)
})