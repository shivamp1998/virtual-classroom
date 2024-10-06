module.exports = function(sequelize, DataTypes) {
    const classroomLogs = sequelize.define('ClassroomLogs', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            unique: true,
            defaultValue: DataTypes.UUIDV4
        },
        participent: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM("student", "teacher"),
            allowNull: false
        },
        action: {
            type: DataTypes.STRING,
            allowNull: false
        },
        classroomId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
        }
    });

    classroomLogs.associate = function(models) {
        classroomLogs.belongsTo(models.Classroom, {
            foreignKey: 'classroomId'
        })
    }
    return classroomLogs;

}