const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());



const dbConfig = require('./config/dbConfig');

const usersRoute = require('./routes/usersRoute');
const examsRoute = require("./routes/examsRoute");
const reportsRoute = require("./routes/reportsRoute");

app.use("/api/users", usersRoute);
app.use("/api/exams", examsRoute);
app.use("/api/reports", reportsRoute);

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})