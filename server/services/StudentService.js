const db = require('../models/index');
const ClassroomLogs = require('../models/ClassroomLogs');
const Classroom = db.Classroom;

class StudentService {
    async joinClass(roomId) {
        const classroom = await Classroom.findOne({
            where: {
                uuid: roomId,
                isDeleted: false
            }
        })

        if(!roomId || !classroom || !classroom.hasStarted) {
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