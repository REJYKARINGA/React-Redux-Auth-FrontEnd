import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: 'https://www.freepik.com/free-vector/user-circles-set_145856997.htm#fromView=search&page=1&position=20&uuid=10510997-c9ff-4a09-aab9-351d48792512',
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema)

export default  User;