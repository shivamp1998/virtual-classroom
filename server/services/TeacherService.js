const db = require('../models/index');
const Classroom = db.Classroom;
const ClassroomLogs = db.ClassroomLogs;
class TeacherService {
    constructor(name) {
        this.teacherName = name;
    }
    async joinClass(roomId) {
        let classroom = await Classroom.findOne({
            where: {
                uuid: roomId
            }
        })
        if(!roomId || !classroom) {
            classroom = await Classroom.create();
        }

        await ClassroomLogs.create({
            participent: this.teacherName,
            role: 'teacher',
            action: 'joined',
            classroomId: classroom.id
        })
        return classroom;   
    }
}

module.exports = TeacherService