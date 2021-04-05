import sequelize from '../config/sequelize';
import User from './user.model';
import Deck from './deck.model';
import Card from './card.model';

//RELATIONS - ASSOCIATIONS (Basic associations for a user without any friends)
User.hasMany(Deck, { onDelete: 'CASCADE', hooks: true });
Deck.belongsTo(User);

Deck.hasMany(Card, { onDelete: 'CASCADE', hooks: true });
Card.belongsTo(Deck);

export default sequelize;
