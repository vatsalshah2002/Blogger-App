const mongoose = require("mongoose");

const earningSchema = new mongoose.Schema(
    {
       user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            required: true,
        },
        amount:{
            type:Number,
            required:true,
        },
        calculatedOn:{
            type:Date,
            default:Date.now
        }
    },
    {
      timestamps:true,
    }
)

const Earning = mongoose.model("Earning", earningSchema);
module.exports= Earning;