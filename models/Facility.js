const mongoose = require('mongoose');

const facilitySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    type: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    address: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    city: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    state: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    zip: {
        type: Number,
        required: true
    },
    lng: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    lat: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    phone_number: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: false 
    },
    comments: {
        type: String,
        required: false
    },
    lastUpdated: {
        type: String,
        required: true
    },
    starred: {
        type: Boolean,
        required: false
    }
});

module.exports = mongoose.model('Facility', facilitySchema)