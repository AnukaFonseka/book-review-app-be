module.exports = (sequelize, DataTypes) => {
    const UserRatings = sequelize.define("UserRatings", {
        ratings: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reviews: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, 
    
    );
 
    return UserRatings
}