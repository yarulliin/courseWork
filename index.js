const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const routes = require('./routes/sneakers')
const config = require('./config')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.use(express.static('public'))

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

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