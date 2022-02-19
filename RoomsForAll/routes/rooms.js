const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');
const {isloggedin,isAuthor,validateRoom} = require('../middleware');
const catchAsync = require('../utils/catchAsync');

router.use(express.urlencoded({extended : true}));
router.use(methodOverride('_method'));

const rooms = require('../controllers/rooms');  

router.get('/',catchAsync(rooms.index));

router.post('/',validateRoom,catchAsync(rooms.addNewRoom));

router.get('/new',isloggedin,rooms.renderNewForm);

router.get('/:id',isloggedin, catchAsync(rooms.showRoom));

router.put('/:id',validateRoom,isAuthor,catchAsync(rooms.updateRoom));

router.get('/:id/edit',isloggedin,isAuthor,catchAsync(rooms.renderEditForm));


router.delete('/:id/delete',catchAsync(rooms.deleteRoom));

module.exports = router;