const express = require('express');
const app = express();
const cors = require("cors");
// const dotEnv = require("dotenv")

// dotEnv.config()

// const PORT = process.env.PORT || 4000;
// const HOST = process.env.HOST || "10.10.92.143"
app.use(express.json());
app.use(cors());

const db = require("./models");

db.sequelize.sync({ alter: true }).then(() => {
    app.listen(3000, () => {
        console.log("SERVER RUNNING ON PORT 3000");
    });

    // app.listen(PORT,HOST,() => console.log(`Server running on ${HOST} at ${PORT}`));
})