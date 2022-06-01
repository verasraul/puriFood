const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const db = require("./db/index");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", routes);

db.on("error", console.error.bind(console, "MongoDB Connection Error"));

// const PORT = process.env.PORT || 3001;
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port);

// app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
