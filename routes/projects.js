var express = require('express')
var router = express.Router()
const fs = require('fs')

/* GET home page. */
router.get('/', function (req, res, next) {
  var projects = JSON.parse(fs.readFileSync('data/projects.json'))
  res.render('projects', { data: projects.projects })
})

module.exports = router
