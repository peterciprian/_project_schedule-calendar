const roleController = require('../controller/role.controller')
const express = require('express')
const roleRouter = express.Router()

roleRouter.route('/')
  .get(roleController.list)
  .post(roleController.create)


roleRouter.route('/:id')
  .put(roleController.update)

roleRouter.route('/deleterole/:id')
  .put(roleController.delete)

roleRouter.route('/getuser/:id')
  .get(roleController.getAllFromUser);
module.exports = roleRouter