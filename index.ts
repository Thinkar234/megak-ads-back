import express, { json } from "express";
import cors from "cors";
import { handleError } from "./utils/error";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(json());

// app.get("/", (req, res) => {
//   throw new Error("Damnnnnn");
// });

app.use(handleError);

app.listen(3001, () => console.log(`Server is listening on port 3001...`));
