module.exports = (sequelize, DataTypes) => {
    const UserRoles = sequelize.define("UserRatings", {
        ratings: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reviews: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
    
    );

    return UserRoles
}