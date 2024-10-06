const express = require('express');
const router = express.Router();
const ClassroomController = require('../controllers/ClassroomController');


router
    .route("/joinRoom")
    .post(ClassroomController.joinRoom)

module.exports = router;

