const express = require ('express')
const app = express()
const path = require('path')


app.use(express.json())
app.use(express.static(path.join(__dirname, '/front_end')))
app.get("/api/tarefas",(req,res)=>{
    res.json([])
})

app.listen(8000,()=>{
    console.log("api já fiz?rodando no servidor local")

})