module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
          }

      },
    });
    return User;
  };
  