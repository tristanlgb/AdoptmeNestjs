import { Schema } from 'mongoose';

export const PetSchema = new Schema({
  name: { type: String, required: true },
  specie: { type: String, required: true },
  birthDate: { type: Date, required: true },
  adopted: { type: Boolean, default: false },
  image: { type: String, default: '' },
});
