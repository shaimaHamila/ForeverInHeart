import mongoose, { ConnectOptions } from "mongoose";

const CONNECT_URL = 'mongodb+srv://Shaima:Pa3Z8jiRKMf44KJY@memoriesappcluster.ajkt3xf.mongodb.net/'
export const mongoConnect = async () =>
    await mongoose.connect(CONNECT_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "memoriesApp",
        } as ConnectOptions)
        .then(() => {
            console.log("Express is connected to mongoDB :D")
        })
        .catch(err => console.log(err))