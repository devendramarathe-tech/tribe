import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGO DB CONNECTED:", conn.connection.host);
  } catch (error) {
    console.log("error connecting to mongodb: ", error);
    process.exit(1); //1 status code means fail 0 means success
  }
};
