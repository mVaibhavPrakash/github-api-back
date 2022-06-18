import mongoose from 'mongoose';

import 'dotenv/config';

const connectDB = async () => {
  try {
    // mongodb connection string
    //${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}
    const connection = await mongoose.connect(
      `mongodb+srv://vp1997dav:Vp261997@github-api.yunf1.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB connected : ${connection.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
