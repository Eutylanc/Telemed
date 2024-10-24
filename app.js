const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const Sequelize = require('sequelize');


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: 'Ghahgsgst%276643VWffegbdbuy38hh',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());

// Routes
const patientsRouter = require('./routes/patients'); 
const doctorsRouter = require('./routes/doctors');
const appointmentsRouter = require('./routes/appointments');
const adminRouter = require('./routes/admin');

app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRouter);
app.use('/appointments', appointmentsRouter);
app.use('/admin', adminRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});