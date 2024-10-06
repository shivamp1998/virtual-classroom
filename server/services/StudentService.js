const Classroom = require('../models/Classroom');
const ClassroomLogs = require('../models/ClassroomLogs');


class StudentService {
    async joinRoom(roomId, studentName) {
        const classroom = await Classroom.findOne({
            where: {
                roomId
            }
        })

        if(!classroom || !classroom.hasStarted) {
            throw new Error('Class has not started Yet');
        }

        await ClassroomLogs.create({
            participent: studentName,
            role: 'student',
            action: 'joined',
            classroomId: classroom.id
        })
        return classroom;
        
    }
}

module.exports = StudentService