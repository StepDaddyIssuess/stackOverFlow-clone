import mongoose, { Schema, ObjectId, Document } from "mongoose";

export interface user extends Document {
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  friends: [ObjectId];
  blockedUsers: [ObjectId];
  messages: [];
  bio: string;
  age: number;
  phoneNumber: string;
  comments: [];
  questions: [];
}

const userSchema = new Schema<user>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profilePicture: { type: String },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  blockedUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  bio: { type: String },
  age: { type: Number },
  phoneNumber: { type: String },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
});

export const UserModel =
  mongoose.models.User || mongoose.model<user>("User", userSchema);
