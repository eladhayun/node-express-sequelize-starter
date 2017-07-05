module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        token: {
            type: DataTypes.STRING,
            allowNull: true
        },
        facebookToken: {
            type: DataTypes.STRING,
            allowNull: true
        },
        googleToken: {
            type: DataTypes.STRING,
            allowNull: true
        },
        pushToken: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: []
        },
        profilePhoto: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isValid: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
        {
            classMethods: {
                associate: (models) => {
                    // associations can be defined here
                }
            }
        }
    )
    return User
}