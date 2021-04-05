import Deck from '../models/deck.model';
import { RequestHandler, Request, Response } from 'express';

// CREATE A NEW DECK IN DB
export const createDeck: RequestHandler = async (
  req: Request,
  res: Response
) => {
  // Validate request
  if (!req.body.userId) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create deck
  const deck = {
    userId: req.body.userId,
    deckName: req.body.deckName,
    details: req.body.details,
    private: req.body.private,
  };

  // Save deck in the database
  await Deck.create(deck)
    .then((data) => {
      res.send(data);
    })
    .catch((err: Error) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Deck!',
      });
    });
};

//GET ALL DECKS FROM DB
export const getAllDecks: RequestHandler = (req: Request, res: Response) => {
  Deck.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err: Error) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving decks.',
      });
    });
};

//UPDATE DECK INFORMATION
export const updateDeck: RequestHandler = (req: Request, res: Response) => {
  Deck.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.status(200);
      res.send(data[1]);
    })
    .catch((err: Error) => {
      res.status(500).send({
        message: `An error occurred while updating deck: ${err}`,
      });
    });
};

// DELETE DECK WITH ID FROM DB
export const deleteDeck: RequestHandler = (req: Request, res: Response) => {
  const id = req.params.id;
  Deck.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Deck was deleted successfully🐣!',
        });
      } else {
        res.send({
          message: `Cannot delete Deck with id=${id}. Maybe Deck was not found!`,
        });
      }
    })
    .catch((err: Error) => {
      res.send(err);
      res.status(500).send({
        message: 'Could not delete Deck with id=' + id,
      });
    });
};

// GET ALL DECKS FROM ONE SPECIFIC USER
export const getAllDecksByUserId: RequestHandler = (
  req: Request,
  res: Response
) => {
  const userId = req.params.userId;
  Deck.findAll({ where: { userId: userId } })
    .then((data) => {
      res.send(data);
    })
    .catch((err: Error) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving decks from user',
      });
    });
};
