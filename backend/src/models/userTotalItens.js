const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserTotalItens = new Schema({
  user: {
    type: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      picture: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
  totalItens: [
    {
      type: {
        totalCups: {
          type: Number,
          required: true,
        },
        totalMl: {
          type: Number,
          required: true,
        },
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("usertotalitens", UserTotalItens);
