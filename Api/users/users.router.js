const { createUser } = require("./users.controller");
const { create } = require("./users.service");
const  router = require("express").Router();


router.POST("/", createUser);

module.exports = router;