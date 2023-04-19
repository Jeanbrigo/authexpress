const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    GamesCurrentlyInID: [],
    isActive: { type: Boolean, default: false},
    isHost: { type: Boolean, default: false},
    isReady: { type: Boolean, default: false},
  },
  { timestamps: true }
);

const User = model("user", userSchema);

module.exports = User;
