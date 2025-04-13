import { Schema } from 'mongoose';

export const AdoptionSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  pet: {
    type: Schema.Types.ObjectId,
    ref: 'Pet',
    required: true
  }
});
