import mongoose, { Schema, ObjectId, Document } from "mongoose";

export interface comment extends Document {
  body: string;
  script: string;
  owner: ObjectId;
  questionOwner: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  dislikes: number;
  replies: [];
  saves: number;
}

const commentSchema = new Schema<comment>({
  body: {
    type: String,
    required: true,
  },
  script: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  questionOwner: {
    type: Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  replies: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  saves: {
    type: Number,
    default: 0,
  },
});

export const CommentModel =
  mongoose.models.Comment || mongoose.model<comment>("Comment", commentSchema);
