import mongoose from "mongoose";

const DB_URI = process.env.DB_URI as string;
let is_connected = false;

export const db_connection = async () => {
  // checking if db alredy connected then no need to connect again
  if (is_connected) {
    console.log("DB Alredy Connected");
    return;
  }

  if (!DB_URI) {
    throw new Error("DB Connection String not provided!");
  }

  // create new connection
  try {
    const res = await mongoose.connect(DB_URI);
    is_connected = res.connection.readyState === 1;
    console.log("DB Connected Successfully -->", res.connection.host);
  } catch (error) {
    console.error("DB Connection Faild!", error);
    throw error;
  }
};