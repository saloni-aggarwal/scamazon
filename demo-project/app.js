const express = require("express");

const connectDB = require("./config/db");
var cors = require('cors');

const app = express();

const funcRouter = require("./routes/api/function");

app.use(express.json())
app.post('/test', (req, res) => {
    res.json({requestBody: req.body})  // <==== req.body will be a parsed JSON object
})

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world yo!"));

//use Routes
app.use("/api/function", funcRouter);

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));