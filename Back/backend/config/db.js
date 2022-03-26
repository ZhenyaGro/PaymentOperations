import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // const databaseName = 'paymentOperations';
    const con = await mongoose.connect(`mongodb+srv://DataBaseAdmin:password12345@cluster0.c6ngd.mongodb.net/paymentOperations?retryWrites=true&w=majorit
    `);
    console.log(`Database connected : ${con.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB