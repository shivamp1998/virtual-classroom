const logger = require('../config/logger');
const ClassroomFactory = require('../factories/ClassroomFactory');

module.exports = {
    joinRoom: async (req, res) => {
        const { roomId, name, role } = req.body;
        try {
            const person = new ClassroomFactory(name, role);
            const personRole = person.getService();
            const room = await personRole.joinClass(roomId);
            if(role == 'teacher') {
                studentList.add(name);
            }else{
                teacherList.add(name);
            }
            return res.send({data: room?.uuid});
        }catch(err) {
            console.log(err);
            return res.status(400).send({error: err.message})
        }
    }
}