import express from "express"

const PORT = process.env.PORT || 3000;


const app = express()

app.use(express.json())

app.post('/',(req,res) => {
    console.log(req.body)
    
    setTimeout(() => {res.status(200).json('Сервер рабоDWтае1т')}, 7000);
    

})

app.listen(PORT, () => console.log('dcadfsadsa'))
