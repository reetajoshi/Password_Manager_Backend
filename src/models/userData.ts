import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true
  },
  data: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

schema.index({
  user: true,
  name: true
}, {
  unique: true
});

export default mongoose.model('userData', schema);
