const express = require("express");
const path = require("path");

const app = express();
const frontend = path.join(__dirname, "../Frontend");

app.use(express.static(frontend));
app.get("/", (req, res) => res.sendFile(path.join(frontend, "Main_user.html")));
app.get("/health", (req, res) => res.json({ ok: true }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor en ${port}`));
