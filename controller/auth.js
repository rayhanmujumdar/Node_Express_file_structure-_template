// create a auth controller
exports.authController = (req,res) => { 
    res.json({
        user: {
            name: 'Rayhan',
            email: 'rayhanmujumdar@gmail.com'
        }
    })
}