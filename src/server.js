import express from "express";

import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "./public/index.html"));
});
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
