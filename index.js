const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const path = require('path')
const exphbs = require('express-handlebars')
const routes = require('./routes/sneakers')
const config = require('./config')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

// app.use(require('morgan')('dev'))
// app.use(require('cors'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))
app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(routes)

async function start() {
    try {
        await mongoose.connect(config.connectionString, {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        
        app.listen(PORT, () => {
            console.log('started');
        })
    } catch (ex) {
        console.log(ex);
    }
}

start()