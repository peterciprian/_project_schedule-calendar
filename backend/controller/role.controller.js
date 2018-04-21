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
                        tasks: role['_id']
                    }
                },
                (err, data) => {
                    if (err) {
                        res.json(err)
                    }
                    res.json({
                        success: 'Role created'
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

    getAllFromUser: (req, res) => {
        User.findById(req.params.id, (err, data) => {
            if (err) {
                res.json(err)
            }
            Role.find({
                '_id': data.tasks
            }, (err, roles) => {
                if (err) {
                    res.json(err)
                }
                res.json(roles)
            })

        })

    },
    /*Role.find({}, (err, roles) => {
            if (err) {
                res.json(err)
            }
            User.findById(req.params.id, (err, data) => {
                if (err) {
                    res.json(err)
                }
                res.json(data)
            })
        })
    },*/


    delete: (req, res) => {
        Role.findByIdAndRemove(req.params.id, (err, role) => {
            if (err) {
                res.json(err)
            }
            User.findByIdAndUpdate(req.body.userid, {
                $pull: {
                    tasks: role['_id']
                }
            }, (err, data) => {
                if (err) {
                    res.json(err)
                }
                res.json({
                    success: 'Role deleted'
                })
            })
        })
    },
    update: (req, res) => {
        Role.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }, (err, role) => {
            if (err) {
                res.json(err)
            }
            res.json(role)
        })
    }



}