import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
// import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User ({ username, email, password:hashedPassword });
  try {
  await newUser.save() // saving the user info in the database
  res.status(201).json('user created');

  } catch (error) {
    next(error);
  }
};