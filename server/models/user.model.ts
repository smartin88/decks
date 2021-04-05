import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const User = sequelize.define('user', {
  userUID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  friends: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    // type: DataTypes.STRING,
    allowNull: true,
  },
});

export default User;
