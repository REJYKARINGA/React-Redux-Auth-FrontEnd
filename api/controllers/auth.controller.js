import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

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

export const signin = async (req,res,next)=>{
    const {email, password} = req.body
    try {
        const validUser = await User.findOne({email})
        if(!validUser){
            return nextz(errorHandler(401,'User not founded'))
        }
        const validPassword  = bcryptjs.compareSync(password, validUser.password)
        if(!validPassword) return next(errorHandler(401,'Wrong Creditianel'))
        const token = jwt.sign({id:validUser._id}, process.env.JWT_SECRET)
        const {password:hashedPassword, ...rest} = validUser._doc
        const expiryDate = new Date(Date.now() + 3600000)
        res.cookie('access_token',token,{httpOnly:true, expires: expiryDate }),.status(200).json(validUser)
    } catch (error) {
       next(error) 
    }
}
