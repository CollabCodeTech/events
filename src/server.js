import express from "express";

const app = express();
const PORT = 5001;

app.get("/", (req, res) => res.send("Será vai!!!"));

app.listen(PORT, () => {
  console.log(`Servidor de pé em: http://localhost:${PORT}`);
  console.log("Para desligar o servidor: ctrl + c");
});
