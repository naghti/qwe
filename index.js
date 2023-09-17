import express from "express"

const PORT = process.env.PORT || 3000;


const app = express()

app.use(express.json())

app.post('/',(req,res) => {
    console.log(req.body)
    res.status(200).json('Сервер рабоDWтае1т')

})

app.listen(PORT, () => console.log('dcadfsadsa'))
