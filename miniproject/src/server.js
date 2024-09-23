import { listRouter } from "./routes/taskList.routes.js";
import express from "express";
const app = express();
const port = 3100;
import cors from "cors";

app.use(cors({
    origin: "http://localhost:5173",  
}));

app.use(express.json());

app.use(listRouter);

app.listen(port, () => {
    console.log(`Port ${port} was initialized successfully`);
})