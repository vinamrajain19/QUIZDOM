const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(express.json());



const dbConfig = require('./config/dbConfig');

const usersRoute = require('./routes/usersRoute');
const examsRoute = require("./routes/examsRoute");
const reportsRoute = require("./routes/reportsRoute");

app.use(cors(
    {
        origin: ["https://deploy-quizdom-1whq.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

app.use("/api/users", usersRoute);
app.use("/api/exams", examsRoute);
app.use("/api/reports", reportsRoute);

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})