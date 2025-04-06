const express = require ('express')
const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("O servidor da api 'Ja fiz??' ja ta rodando")
})

app.listen(8000,()=>{
    console.log("api já fiz?rodando no servidor local")

})