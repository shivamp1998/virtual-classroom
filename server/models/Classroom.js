module.exports = function(sequelize, DataTypes) {
    const Classroom = sequelize.define('Classroom', {
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
        classroomLogsId: {
            type: DataTypes.INTEGER,
        },
        hasStarted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal(`CURRENT_TIMESTAMP`)
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal(`CURRENT_TIMESTAMP`)
        }
    }, {
        freezeTableName: true,
        timestamps: true
    })

    Classroom.associate = function(models) {
        Classroom.hasMany(models.ClassroomLogs, {
            foreignKey: 'classroomId'
        })
    }

    return Classroom;
}