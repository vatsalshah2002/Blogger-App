const mongoose = require("mongoose");

const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://vatsals5:20022002@blog-app.lof42.mongodb.net/?retryWrites=true&w=majority");
        console.log("DB connected");
    } catch (error) {
        console.log("DB not");
        console.log(error);
        process.exit(1);
    }
}

module.exports = ConnectDB;