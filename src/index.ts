import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  const response = {
    email: "chibthankgod@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/actokuyt/HNG12i/tree/master/stage0",
  };
  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
