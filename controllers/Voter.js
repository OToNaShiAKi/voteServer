const Voter = require('./../models/Voter')
const Candidate = require('./../models/Candidate')

exports.VoteCandidates = (req, res) => {
    Voter.find({ voter: req.body.voter }).then(items => {
        if (items.length) throw { status: 521, message: "您已投票，请勿重复投票" }
        else return new Voter(req.body).save();
    }).then(() => res.json({
        status: 200,
        message: "投票成功"
    })).catch(err => {
        res.json({
            status: err.status || 520,
            message: err.message || "信息储存失败"
        })
    })
}

exports.VoteResult = (req, res) => {
    let result = []
    Candidate.find({}, "name department").then(candidates => {
        let votePromises = []
        for (let candidate of candidates) {
            const query = candidate.department + '.name';
            const vote = Voter.find({
                [query]: candidate.name
            }).then(voters => {
                result.push({
                    _id: candidate._id,
                    name: candidate.name,
                    department: candidate.department,
                    votes: voters.length
                })
            })
            votePromises.push(vote)
        }
        return Promise.all(votePromises);
    }).then(() => res.json({
        status: 200,
        message: '查询成功',
        result
    })).catch(err => {
        res.json({
            status: err.status || 530,
            message: err.status || "查询失败",
        })
    })
}