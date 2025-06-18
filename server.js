const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(rateLimit({ windowMs: 60 * 1000, max: 20 }));

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Nahru läuft auf Port ${port}`);
});