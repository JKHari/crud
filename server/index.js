import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";

import employeRouter from './routes/employee.js';

const app = express();
const PORT = 5001;


app.use(cors());
app.use(bodyParser.json());

app.use("/api/employee", employeRouter );

app.get("/", (req, res) => {
    res.send("Hello from homepage");
  });
  
  app.listen(PORT, () => console.log("SERVER RUNNING AT PORT 5001"));
  




