import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Card = sequelize.define('card', {
  deckId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  front: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  back: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  languageFront: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  languageBack: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stage: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

export default Card;
