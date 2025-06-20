import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory storage for demonstration
const tasks = [];
const meals = [];
const hygieneLogs = [];
const schedules = [];
const periodLogs = [];

app.get('/', (req, res) => {
  res.json({ message: 'Family Hub backend running' });
});

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  tasks.push(req.body);
  res.json({ status: 'added' });
});

app.get('/api/meals', (req, res) => {
  res.json(meals);
});

app.post('/api/meals', (req, res) => {
  meals.push(req.body);
  res.json({ status: 'added' });
});

app.get('/api/hygiene', (req, res) => {
  res.json(hygieneLogs);
});

app.post('/api/hygiene', (req, res) => {
  hygieneLogs.push(req.body);
  res.json({ status: 'added' });
});

app.get('/api/schedule', (req, res) => {
  res.json(schedules);
});

app.post('/api/schedule', (req, res) => {
  schedules.push(req.body);
  res.json({ status: 'added' });
});

app.get('/api/period', (req, res) => {
  res.json(periodLogs);
});

app.post('/api/period', (req, res) => {
  periodLogs.push(req.body);
  res.json({ status: 'added' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
