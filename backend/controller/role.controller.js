const Role = require('../model/role-model')

module.exports = {
    list: (req, res) => {
        Role.find({}, (err, role) => {
            if (err) {
                res.send(err)
            }
            res.json(role)
        })
    },

    find: (req, res) => {
        Role.findById(req.params.id, (err, role) => {
            if (err) {
                res.send(err)
            }
            res.json(role)
        })
    },

    create: (req, res) => {
        Role.create(req.body, (err, role) => {
            if (err) {
                res.send(err)
            }
            //usert lekeresni id alapján és a todoit updatelni (mint itt lentebb az update-nél)
            res.json(role)
        })
    },

    update: (req, res) => {
        req.body.updatedAt = new Date().toLocaleString();
        Role.findByIdAndUpdate(req.params.id, req.body, (err, role) => {
            if (err) {
                res.send(err)
            }
            res.json(role)
        })
    },

    remove: (req, res) => {
        Role.findByIdAndRemove(req.params.id, (err, role) => {
            if (err) {
                res.send(err)
            }
            res.json(role)
        })
    }
}