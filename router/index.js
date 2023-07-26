// index.js created to all router handling in this file
const router = require('express').Router()
// auth router import to ./route/auth file
const authRouter = require('./auth')

// check our application health route
router.get('/health',(req,res) => {
    res.json({
        message: 'success'
    })
})

// create multiply  route middleware: for example
router.use('/api/v1/auth',authRouter)

// export route for app.js file
module.exports =  router