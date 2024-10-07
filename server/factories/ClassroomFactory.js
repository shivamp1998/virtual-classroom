const TeacherService = require('../services/TeacherService');
const StudentService = require('../services/StudentService');


class ClassroomFactory {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    getService() {
        switch(this.role) {
            case 'teacher' : 
                return new TeacherService(this.name);
            case 'student' :
                return new StudentService(this.name);
            default: 
                throw new Error('Invalid type provided to factory');
        }
    }
}

module.exports = ClassroomFactory