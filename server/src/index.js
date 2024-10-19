import express from "express";

const app = express();

const PORT = 3380;

app.get("/", (req, res) => {
  res.json({ server: "working" });
});

app.listen(PORT, () => console.log(`Sever is running on : ${PORT}`));
