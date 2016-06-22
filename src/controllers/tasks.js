/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();

// task list
router.get('/', (req, res) => {
  res.render('tasks/index');
});

// create a new task
router.get('/new', (req, res) => {
  res.render('tasks/new');
});

// create a task and redirect to tasks
router.post('/', (req, res) => {
  res.redirect('/tasks');
});

// complete the task (mark completed)
router.post('/:id/complete', (req, res) => {
  res.redirect('/tasks');
});

// delete a task
router.post('/:id/delete', (req, res) => {
  res.redirect('/tasks');
});

router.get('/:id/edit', (req, res) => {
  res.render('/tasks/new');
});

// update task
router.post('/:id', (req, res) => {
  res.redirect('/tasks');
});
