const Phone = require('../models/phoneModel')
const mongoose = require('mongoose')

// Get all smartphones
const getPhones = async (req, res) => {
    const phones = await Phone.find({}).sort({createdAt: -1})

    res.status(200).json(phones)
}

// Get a single smartphone
const getPhone = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such phone'})
    }

    const phone = await Phone.findById(id)
    if(!phone) {
        return res.status(404).json({error: 'No such phone'})
    }
    res.status(200).json(phone)
}

// Search smartphone by title
const searchTitle = async (req, res) => {
    const { title } = req.params
    const regex = new RegExp(title, 'i'); // i - case insensetive
    const phone = await Phone.find({ name: regex }) // title
    if(!phone) {
        return res.status(404).json({error: 'No such phone'})
    }
    res.status(200).json(phone)
}

// POST a new smartphone
const addPhone = async (req, res) => {
    const {title, brand, price, memory, display, weight, battery, os, proccessor, main_camera} = req.body

    // add doc to db
    try {
        const phone = await Phone.create({title, brand, price, memory, display, weight, battery, os, proccessor, main_camera})
        res.status(200).json(phone)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
// DELETE a smartphone
const deletePhone = async (req, res) => {
    const { id } = req.params

    // Check if the ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such phone'})
    }
    
    // Dlelete phone with that ID
    const phone = await Phone.findOneAndDelete({ _id: id})

    // If no phone found
    if(!phone) {
        return res.status(404).json({error: 'No such phone'})
    }

    res.status(200).json(phone)
}


// UPDATE a smartphone
const updatePhone = async (req, res) => {
    const { id } = req.params

    // Check if the ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such phone'})
    }
    
    const phone = await Phone.findOneAndUpdate({ _id: id}, {
        ...req.body
    })

    // If no phone found
    if(!phone) {
        return res.status(404).json({error: 'No such phone'})
    }

    res.status(200).json(phone)

}

module.exports = {
    addPhone, getPhone, getPhones, deletePhone, updatePhone, searchTitle
}