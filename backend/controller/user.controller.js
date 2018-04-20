const User = require('../model/user-model');

module.exports = {
    getUser: (req, res) => {
        res.json({
            user: req.user
        }) /*user.tasks = [..,]*/
    },

    register: (req, res, next) => {
        User.register(new User({
            username: req.body.username,
            email: req.body.email
        }), req.body.password, (err) => {
            if (err) {
                res.json({
                    error: err
                })
            }
            res.json({
                success: 'Sikeres regisztráció'
            })
        });
    },

    login: (req, res) => {
        res.json({
            user: req.user

        })
    },

    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    }
}