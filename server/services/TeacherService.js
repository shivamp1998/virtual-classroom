const Classroom = require('../models/Classroom');
const ClassroomLogs = require('../models/ClassroomLogs')

class TeacherService {
    constructor(name) {
        this.teacherName = name;
    }
    async joinClass(roomId) {
        let classroom = await Classroom.findOne({
            where: {
                roomId
            }
        })
        if(!classroom) {
            classroom = await Classroom.create();
        }

        await ClassroomLogs.create({
            participent: this.teacherName,
            role: 'teacher',
            action: 'joined',
        })
        return classroom;   
    }
}

module.exports = TeacherService