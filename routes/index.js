
const express = require('express');
const passport=require('passport')
const router = express.Router();



router.use('/product',require('./product'))

router.use('/user',require('./user'))

module.exports = router;
