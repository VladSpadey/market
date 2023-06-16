const express = require('express')
const router = express.Router()
const { 
    addPhone, 
    getPhone, 
    getPhones, 
    deletePhone, 
    updatePhone,
    searchTitle
} = require("../controllers/phoneController")

// Get all smartphones
router.get('/', getPhones)

// Search smartphones by title
router.get('/phone/:title', searchTitle)

// Get a single smartphone
router.get('/:id', getPhone)

// POST a new smartphone
router.post('/', addPhone)

// DELETE a smartphone
router.delete('/:id', deletePhone)

// UPDATE a smartphone
router.patch('/:id', updatePhone)

module.exports = router