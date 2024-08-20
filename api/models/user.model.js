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
        default: 'https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1724175130~exp=1724178730~hmac=e0e0948c66e1b81c8ce61d2bb1552b4647d05c1735da359b29e6677531ff71d9&w=740',
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema)

export default  User;