const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// copy the const name and the file path to new version

const lettergenerator = require('./routes/lettergenerator');;
const errormessages = require('./routes/errormessages');;

//copy the router use and update the sprint version

router.use(lettergenerator);
router.use(errormessages);

module.exports = router
