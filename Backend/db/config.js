const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb://localhost:27017/ecomm`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
// mongoose.connect("mongodb://localhost:27017/e-comm");
connectDB();