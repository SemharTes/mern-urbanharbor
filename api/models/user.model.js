import mongoose from 'mongoose';

const userSchema = new mongoose.Schema ({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
}, { timestamps: true} // time of creation and update of the user inorder to sort them by time and latest
);

const User = mongoose.model('User', userSchema); 

export default User;