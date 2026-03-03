import express from "express";
import imagemRoutes from "./routes/image.routes.js";
import path from 'path'
import 'dotenv/config'

const app = express();
app.use ('/',imagemRoutes);

app.listen(process.env.SEVER_PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.SEVER_PORT}`)
})