import mongoose from "mongoose";

const connectDB = async (url: string) => {
  try {
    const response = await mongoose.connect(url);
    if (response) {
      console.log(`[DB]: database connnected successfully`);
    }
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
