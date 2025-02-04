import express from "express";
import "dotenv/config";
import { jwtToken } from "./jwt-token-gen.js";

const app = express();

const PORT = 3380;

app.get("/", (req, res) => {
  res.json({ server: "working" });
});

app.get("/token", (req, res) => {
  const t = jwtToken();
  console.log(t);
  res.json(t);
});

app.listen(PORT, () => console.log(`Sever is running on : ${PORT}`));
