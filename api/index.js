import express from 'express'
const app = express()

import nodemon from 'nodemon'

app.listen(3000,()=>{
    console.log('Server listening on port 3000')
})