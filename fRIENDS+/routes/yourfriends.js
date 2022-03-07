const express = require('express');
const passport = require('passport');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const multer = require('multer');

const users = require('../controllers/users');

// router.route('/yourfriends')
//       .get(users.showFriends)

module.exports= router;