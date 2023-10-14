import db from "../sequelize/index.js";
import {User} from "../../../core/entities/User.js";
import {DataTypes, Model, ModelStatic} from 'sequelize';

const UserModal: ModelStatic<Model<User>> = db.sequelize.define("user", {
    firstName: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
    },

    role: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

export default UserModal
