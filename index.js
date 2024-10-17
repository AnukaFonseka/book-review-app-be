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

// Routers
const routes = require("./routes/index.routes");
app.use("/", routes);

try{

    db.Users.belongsTo(db.Roles, { as: "roles", foreignKey: "roleId"});
    db.Roles.hasMany(db.Users, {as: "users", foreignKey: "roleId"});

    db.Books.belongsToMany(db.Users, {through: "UserRatings", foreignKey: "bookId", onDelete: "cascade"});
    db.Users.belongsToMany(db.Books, {through: "UserRatings", foreignKey: "userId", onDelete: "cascade"});

} catch (error) {
    console.log(error);
}

db.sequelize.sync({ alter: true }).then(() => {
    app.listen(3000, () => {
        console.log("SERVER RUNNING ON PORT 3000");
    });

    // app.listen(PORT,HOST,() => console.log(`Server running on ${HOST} at ${PORT}`));
})