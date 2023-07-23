import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const Connection = () => {
    mongoose.connect(process.env.CONNECTION_STRING)

    .then(() => {
        console.log("Mongodb connection is established");
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })
}
export default Connection;