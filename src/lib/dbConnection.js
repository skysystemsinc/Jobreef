// import mongoose from "mongoose";

// const connectMongo = async () => mongoose.connect(process.env.MONGO_URI);
// console.log("connectMongo",connectMongo)

// // export default connectMongo;

// (async () => {
//   try {
//     console.log("CONNECTING TO MONGO");
//     await connectMongo();

//     console.log("CONNECTED TO MONGO");

//   } catch (error) {
//     console.log(error);

//   }
// })();
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

mongoose.set("strictQuery", false);

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("Connected to MongoDB successfully");
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
// const dbConnection = async () => {
//   try {
//     console.log("CONNECTING TO MONGO");
//     await dbConnect();
//     console.log("CONNECTED TO MONGO");
//   } catch (error) {
//     console.log(error);
//   }
// };
export default dbConnect;
