const express = require('express');
const passport = require('passport');
const router = express.Router({mergeParams:true});
const catchAsync = require('../utils/catchAsync');
const multer = require('multer');
router.use(express.urlencoded({extended : true}));
const methodOverride = require('method-override');
router.use(methodOverride('_method'));
const yourfriends = require('../controllers/yourfriends');


router.get('/',catchAsync(yourfriends.showFriends));
router.get('/new',catchAsync(yourfriends.findPeople));
router.get('/find',catchAsync(yourfriends.showPeople));
router.get('/viewProfile',catchAsync(yourfriends.viewPeople));
router.get('/addFriend',catchAsync(yourfriends.addPeople));
router.get('/friendRequest',catchAsync(yourfriends.friendRequest));
router.get('/decisions',catchAsync(yourfriends.decision));

module.exports = router;