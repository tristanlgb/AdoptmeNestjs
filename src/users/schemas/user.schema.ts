import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  first_name: { type: String, required: true },
  last_name:  { type: String, required: true },
  email:      { type: String, required: true, unique: true },
  role:       { type: String, default: 'user' }
});
