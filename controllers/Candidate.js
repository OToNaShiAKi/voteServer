const Candidate = require('./../models/Candidate')
const fs = require("fs")
const { basename, resolve } = require('path')
const { IncomingForm } = require("formidable")

exports.AddCandidate = (req, res) => {
    let from = new IncomingForm({
        uploadDir: './uploads/',
        keepExtensions: true
    })
    from.parse(req, (err, fields, files) => {
        if (err) res.json({
            status: 502,
            message: "图片储存错误"
        })
        else {
            fields.avatar = basename(files.avatar.path)
            Candidate.find({ name: fields.name, department: fields.department }).then((items) => {
                if (items.length) throw { message: "部门已添加该竞选人", status: 501 }
                else return new Candidate(fields).save();
            }).then(() =>
                res.json({
                    status: 200,
                    message: "添加候选人成功"
                })
            ).catch(err => {
                fs.unlink(resolve('./uploads/' + fields.avatar));
                res.json({
                    status: err.status || 500,
                    message: err.message || "信息储存失败"
                })
            })
        }
    })
}

exports.GetCandidates = (req, res) => {
    Candidate.find().then((cards) => {
        res.json({
            status: 200,
            cards,
            message: "获取成功"
        })
    }).catch(err => {
        res.json({
            status: 510,
            message: "获取失败"
        })
    })
}