const Sequelize = require('sequelize');
const db = require('../config/db');

const Appointment = db.define('AppointmentTable', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  patientId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Patients',
      key: 'id'
    }
  },
  doctorId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Doctors',
      key: 'id'
    }
  },
  appointmentDate: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  appointmentTime: {
    type: Sequelize.TIME,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'scheduled'
  }
});

module.exports = Appointment;