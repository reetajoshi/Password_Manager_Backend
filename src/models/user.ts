import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('user', schema);
