const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema(
 {
    email: {
        type: String,
        unique: true,
        required: true
    }, 
    password: {
        type: String,
        required: true,
    }
 },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = Users = mongoose.model("users", UsersSchema);
