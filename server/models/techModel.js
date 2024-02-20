import mongoose from "mongoose";

const Schema = mongoose.Schema;

const techSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    ratings: { type: Number, required: true },
    icon: { type: String, required: true },
    field: {
      type: String,
      required: true,
      enum: [
        "language",
        "frontend-framework",
        "frontend-library",
        "backend-framework",
        "backend-library",
        "api",
        "database",
        "style",
        "cloud-services",
        "deployment"
      ],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Tech", techSchema);