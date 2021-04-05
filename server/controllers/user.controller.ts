import User from '../models/user.model';
import { RequestHandler, Request, Response } from 'express';

// CREATE A NEW USER IN DB
export const createUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  // Validate request
  if (!req.body.userUID) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create user
  const user = {
    userUID: req.body.userUID,
    email: req.body.email,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    userImage: req.body.userImage,
    friends: req.body.friends,
  };

  // Save user in the database
  await User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err: Error) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User!',
      });
    });
};

// GET ALL USERS FROM DB
export const getAllUsers: RequestHandler = (req: Request, res: Response) => {
  User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err: Error) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.',
      });
    });
};

// GET ONE USERS FROM DB BY UUID
export const getUserByUUId: RequestHandler = (req: Request, res: Response) => {
  const userUID = req.params.userUID;
  User.findOne({
    where: { userUID: userUID },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err: Error) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving user.',
      });
    });
};

// GET ONE USERS FROM DB BY ID
export const getUserById: RequestHandler = (req: Request, res: Response) => {
  const id = req.params.id;
  User.findOne({
    where: { id: id },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err: Error) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving user.',
      });
    });
};

// GET ONE USERS FROM DB BY EMAIL
export const getUserByEmail: RequestHandler = (req: Request, res: Response) => {
  const email = req.params.email;
  User.findOne({
    where: { email: email },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err: Error) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving user.',
      });
    });
};

//UPDATE USER INFORMATION
export const updateUser: RequestHandler = (req: Request, res: Response) => {
  User.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.status(200);
      res.send(data[1]);
    })
    .catch((err: Error) => {
      res.status(500).send({
        message: `An error occurred while updating user: ${err}`,
      });
    });
};

// DELETE USER WITH ID FROM DB
export const deleteUser: RequestHandler = (req: Request, res: Response) => {
  const id = req.params.id;
  User.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'User was deleted successfully🐣!',
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        });
      }
    })
    .catch((err: Error) => {
      res.send(err);
      res.status(500).send({
        message: 'Could not delete User with id=' + id,
      });
    });
};
