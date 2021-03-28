const {Router} = require('express')
const model = require('../models/model')
const controllers = require('../controllers/auth')
const router = Router()

router.get('/', async (req, res) => {
    const models = await model.find({})

    res.render('index', {
        title: 'yard online shop',
        models
    })
})

router.get('/login', (req, res) => {
    res.render('login', {
        title: 'login',
    })
})
router.post('/login', controllers.login)

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'register'
    })
})
router.post('/register', controllers.register)

module.exports = router