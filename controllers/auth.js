const User = require('../models/user')

module.exports.login = (req, res) => {
    res.render('login', {
        title: 'login',
    })
}

module.exports.register = (req, res) => {
    // res.render('register', {
    //     title: 'register'
    // })

    const user = new User({
        email: req.body.email,
        password: req.body.password
    })

    user.save()
}