/* This code snippet is defining a Mongoose schema for a collection named "Tech" in a MongoDB database.
Here's a breakdown of what each part of the code is doing: */
import { Decimal128 } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const techSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    ratings: { type: Decimal128, required: true },
    icon: { type: String, required: true },
    field: {
      type: String,
      required: true,
      enum: [
        "frontend",
        "style",
        "backendFramework",
        "database",
        "api",
        "cloudComputingPlatform",
        "containerizationPlatform",
        "deployment",
        "other",
      ],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Tech", techSchema);
