import express from "express";
import { loadRoutes } from "./routes/loadRoutes.js";

const app = express();

app.use(express.json());

loadRoutes(app);

const {PORT} = process.env; 

app.listen(PORT, () => {
    console.log(`server started at: http://localhost:${PORT}`); 
});