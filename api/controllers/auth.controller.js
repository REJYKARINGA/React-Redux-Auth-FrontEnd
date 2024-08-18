import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req,res,next)=>{
    console.log(req.body,'Hello post method controller')
    const { username, email, password } = req.body
    const hashedPassword = bcryptjs.hashSync(password,10)
    const newUser = new User({username, email, password: hashedPassword})
try {
    await newUser.save()
    res.status(201).json({message:'User created Successfully'})

} catch (error) {
    next(errorHandler(400,'All fields are required'))
}
}