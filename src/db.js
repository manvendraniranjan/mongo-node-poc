const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/User"

const connectDB = async () => {
    try {

        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.uri}`);
    } catch (error) {
        console.error(error);
        process.exit(1); // Exit process on failure
    }
};

module.exports = connectDB;
