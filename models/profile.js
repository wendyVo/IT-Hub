const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },

    bio: { type: String},
    company: {
      type: String
    },
    website: {
      type: String
    },
    location: {
      type: String
    },
    status: {
      type: String,
      required: true
    },
    skills: {
      type: [String],
      required: true
    },
    social: {
      facebook: { type: String },
      twitter: { type: String },
      youtube: { type: String },
      instagram: { type: String }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);