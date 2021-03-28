const {Schema, model} = require('mongoose')

const brandSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    gender: {
        type: Boolean,
        required: true
    },
    description: {
        type: String
    }
})

module.exports = model('sneakers', brandSchema)