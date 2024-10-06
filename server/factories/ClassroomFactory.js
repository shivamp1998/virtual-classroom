const TeacherService = require('../services/TeacherService');
const StudentService = require('../services/StudentService');


class ClassroomFactory {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    static getService() {
        switch(type) {
            case 'teacher' : 
                return new TeacherService(this.name);
            case 'student' :
                return new StudentService(this.name);
        }
    }
}