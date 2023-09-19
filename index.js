import express from "express"
import cors from "cors"
const PORT = process.env.PORT || 3000;
const app = express()


app.use(cors());

app.use(express.json())

app.post('/',(req,res) => {
    console.log(req.body)
    setTimeout(() => {res.status(200).json('Сервер рабоDWтае1т')}, 7000);

})

app.listen(PORT, () => console.log('dcadfsadsa'))
