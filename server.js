const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const projectRoutes = require('./routes/projectRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const memberRoutes = require('./routes/memberRoutes');
const authRoutes = require('./routes/authRoutes'); // Thêm route đăng nhập

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yoouth_union', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes); // Đăng nhập route
app.use('/tasks', taskRoutes);
app.use('/projects', projectRoutes);
app.use('/schedules', scheduleRoutes);
app.use('/members', memberRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
