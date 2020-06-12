const {
    model,
    Schema
} = require('mongoose')

const VoterSchema = new Schema({
    voter: {
        type: String,
        require: true
    },
    president: {
        type: {
            name: String,
            _id: String
        },
        require: true
    },
    office: {
        type: {
            name: String,
            _id: String
        },
        require: true
    },
    media: {
        type: {
            name: String,
            _id: String
        },
        require: true
    },
    editor: {
        type: {
            name: String,
            _id: String
        },
        require: true
    },
    workshop: {
        type: {
            name: String,
            _id: String
        },
        require: true
    },
    onecho: {
        type: {
            name: String,
            _id: String
        },
        require: true
    }
})

const Voter = model('voter', VoterSchema)

module.exports = Voter;