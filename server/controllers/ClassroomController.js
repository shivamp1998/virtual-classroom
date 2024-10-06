const Classroom = require('../models/Classroom');
const logger = require('../config/logger')

class ClassroomController {
    let studentList = [];
    let teacherList = [];

    async joinRoom(req, res) {
        const { roomId, userId, role } = req.body;
        try {
            
        }catch(err) {
            logger.error(err.message);
            return res.status(400).send({error: err.message})
        }
    }
}