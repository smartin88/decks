import Card from '../models/card.model';
import { RequestHandler, Request, Response } from 'express';

// CREATE A NEW CARD IN DB
export const createCard: RequestHandler = async (
  req: Request,
  res: Response
) => {
  // Validate request
  if (!req.body.front) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create card
  const card = {
    deckId: req.body.deckId,
    front: req.body.front,
    back: req.body.back,
    languageFront: req.body.languageFront,
    languageBack: req.body.languageBack,
    stage: req.body.stage,
  };

  // Save user in the database
  await Card.create(card)
    .then((data) => {
      res.send(data);
    })
    .catch((err: Error) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Card!',
      });
    });
};

// GET ALL CARDS FROM DB
export const getAllCards: RequestHandler = (req: Request, res: Response) => {
  Card.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err: Error) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving cards.',
      });
    });
};

//UPDATE CARD INFORMATION
export const updateCard: RequestHandler = (req: Request, res: Response) => {
  Card.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.status(200);
      res.send(data[1]);
    })
    .catch((err: Error) => {
      res.status(500).send({
        message: `An error occurred while updating card: ${err}`,
      });
    });
};

// DELETE CARD WITH ID FROM DB
export const deleteCard: RequestHandler = (req: Request, res: Response) => {
  const id = req.params.id;
  Card.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Card was deleted successfully🐣!',
        });
      } else {
        res.send({
          message: `Cannot delete Card with id=${id}. Maybe Card was not found!`,
        });
      }
    })
    .catch((err: Error) => {
      res.send(err);
      res.status(500).send({
        message: 'Could not delete Card with id=' + id,
      });
    });
};

// GET ALL CARDS FROM ONE SPECIFIC USER
export const getAllDecksByDeckId: RequestHandler = (
  req: Request,
  res: Response
) => {
  const deckId = req.params.deckId;
  Card.findAll({ where: { deckId: deckId } })
    .then((data) => {
      res.send(data);
    })
    .catch((err: Error) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving cards from deck',
      });
    });
};
