import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import { mongoConnect } from './config/Database';
import router from './routes/PostsRouter';

mongoConnect();
const app = express()
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

const PORT = process.env.PORT || 5000

app.use('/post', router)

app.listen(PORT, () => {
    console.log('Express is running at http://localhost:5000 !')
})