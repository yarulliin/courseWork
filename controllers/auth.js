const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')
const User = require('../models/user')
const config = require('./config')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async (req, res) => {
    res.render('login', {
        title: 'login',
    })

    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, config.jwt, {expiresIn: 60*60})

            res.status(200).json({
                token: token
            })
        } else {
            res.status(401).json({
                message: 'Неверный пароль'
            })
        }
    } else {
        res.status(404).json({
            message: 'Пользователь с таким email не найден'
        })
    }
}

module.exports.register = async (req, res) => {
    const candidate = await User.findOne({email: req.body.email}) 

    if (candidate) {
        res.status(409).json({
            message: 'Пользователь с таким email уже существует'
        })
    } else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })

        try {
            await user.save()  
            res.status(201).json(user)      
        } catch(e) {
            errorHandler(res, e)
        }
    }
}