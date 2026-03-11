const express = require("express")
const authController = require("../controllers/auth.controller")

const routes = express.Router()

routes.post("/register", authController.registerUserController)
routes.post("/login", authController.loginUserController)


module.exports = routes
