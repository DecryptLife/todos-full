const router = require("express").Router()
const jwt = require("jsonwebtoken")

const users = []
let id = 1

// register
router.post("/register", (req, res) => {

})


// login => generate access token
router.post("/login", (req, res) => {

})

module.exports = router