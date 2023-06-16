const mongoose = require("mongoose")

const Schema = mongoose.Schema

const phoneSchema  = new Schema({
    title: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: [Number],
        required: true
    },
    memory: {
        type: [Number],
        required: true
    },
    image: {
        type: [String],
        required: true
    },
    color: {
        type: [String],
        required: true
    },
    display: {
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: false
    },
    battery: {
        type: Number,
        required: false
    },
    battery_life: {
        type: Number,
        required: false
    },
    os: {
        type: String,
        required: false
    },
    proccessor: {
        type: String,
        required: false
    },
    main_camera: {
        type: Number,
        required: false
    },
    ram: {
        type: Number,
        required: false
    }


}, { timestamps: true })

module.exports = mongoose.model('Phone', phoneSchema)