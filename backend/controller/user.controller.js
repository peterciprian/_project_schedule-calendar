const User = require('../model/user-model');

module.exports = {
    getUser: (req, res) => {
        res.json({
            user: req.user
        })
    },

    register: (req, res, next) => {
        User.register(new User({
            username: req.body.username,
            email: req.body.email
        }), req.body.password, (err) => {
            if (err) {
                res.json({
                    erroeo: err
                })
            }
            res.json({
                success: 'Sikeres regisztráció'
            })
        });
    },

    login: (req, res) => {
        res.redirect('/');
    },

    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    }
}