const Classroom = require('../models/Classroom');
const logger = require('../config/logger');
const ClassroomFactory = require('../factories/ClassroomFactory');


module.exports = {
    joinRoom: async (req, res) => {
        const { roomId, name, role } = req.body;
        try {
            const person = new ClassroomFactory(name, role);
            const personRole = person.getService();
            const room = await personRole.joinRoom(roomId);
            if(role == 'teacher') {
                studentList.add(name);
            }else{
                teacherList.add(name);
            }
            return room;
        }catch(err) {
            logger.error(err.message);
            return res.status(400).send({error: err.message})
        }
    }
}