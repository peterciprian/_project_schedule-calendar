const roleController = require('../controller/role.controller')
const express = require('express')
const roleRouter = express.Router()

roleRouter.route('/')
  .get(roleController.list)
  .post(roleController.create);

roleRouter.route('/:id')
  .get(roleController.find)
  .put(roleController.update)
  .delete(roleController.remove);

module.exports = roleRouter