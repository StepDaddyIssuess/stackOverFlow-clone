import mongoose, { Schema, ObjectId, Document } from "mongoose";

export interface question extends Document {
  title: string;
  body: string;
  script: string;
  owner: ObjectId;
  comments: [];
  createdAt: Date;
  updatedAt: Date;
  views: [];
  tags: [];
}

const questionSchema = new Schema<question>({
  title: {
    type: String,
    required: true,
  },
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
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  views: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
});

export const QuestionModel =
  mongoose.models.Question ||
  mongoose.model<question>("Question", questionSchema);
