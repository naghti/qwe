import express from "express"

const PORT = 5000 || config.get('serverPort')

const app = express()

app.use(express.json())

app.post('/',(req,res) => {
    console.log(req.body)
    res.status(200).json('Сервер рабоDWтае1т')

})

app.listen(PORT, () => console.log('dcadfsadsa'))