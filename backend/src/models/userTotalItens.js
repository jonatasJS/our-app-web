const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserTotalItens = new Schema({
  _id: {
    type: {
      $oid: {
        type: String,
      }
    },
    required: true,
  },
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
      required: true,
      createdAt: {
        type: Date,
        default: Date.now,
      }
    },
  ],
});

module.exports = mongoose.model("UserTotalItens", UserTotalItens);
