const Role = require('../model/role-model')
const User = require('../model/user-model')

module.exports = {

    create: (req, res) => {
        Role.create(req.body, (err, role) => {
            if (err) {
                res.json(err)
            }
            User.findByIdAndUpdate(req.body.userid, {
                    $push: {
                        tasks: role._id
                    }
                },
                (err, data) => {
                    if (err) {
                        res.json(err)
                    }
                    res.json({
                        success: 'ok'
                    })
                })
        })
    },

    list: (req, res) => {
        Role.find({}, (err, roles) => {
            if (err) {
                res.json(err)
            }
            res.json(roles)
        })
    },
    delete: (req, res) => {
        Role.findByIdAndRemove(req.params.id, (err, data) => {
            if (err) {
                res.json(err)
            }
            User.findByIdAndRemove(req.body.userid, (err, data) => {
                if (err) {
                    res.json(err)
                }
                res.json(data)
            })
        })
    },
    update: (req, res) => {
        Role.findByIdAndUpdate(req.params.id, req.body, (err, role) => {
            if (err) {
                res.json(err)
            }
            res.json(role)
        })
    }



}