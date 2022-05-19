import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(json());

app.listen(3001, () => console.log(`Server is listening on port 3001...`));
