const {
    model,
    Schema
} = require('mongoose')

const CandidateSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    introduce: {
        type: String,
        require: true
    },
    declaration: {
        type: String,
        require: true
    },
    department: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
        require: true
    }
})

const Candidate = model('candidate', CandidateSchema)

module.exports = Candidate;