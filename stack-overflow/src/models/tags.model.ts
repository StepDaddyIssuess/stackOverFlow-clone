import mongoose, { Schema, Document } from "mongoose";

export interface tag extends Document {
  title: string;
  body: string;
  countsInMessages: number;
}

const tagSchema = new Schema<tag>({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  countsInMessages: {
    type: Number,
    default: 0,
  },
});

export const TagModel =
  mongoose.models.Tag || mongoose.model<tag>("Tag", tagSchema);
