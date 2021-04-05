import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Deck = sequelize.define('deck', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  deckName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  details: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  private: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

export default Deck;
