const User = require('../User');
const Task = require('../Task');

let counterForUserId = 0;
let counterTaskId = 0;

let users = [];

/* Generate new user id */
exports.createNewUserId = (req, res) => {
  users.push(new User(++counterForUserId));
  res.send({id: counterForUserId});
};

/* GET */
exports.findAll = (req, res) => { 
  users.forEach((user) => {
    if(user.userId == req.params.userId) {
      res.send({tasks: user.tasks});
    }
  });
};

/* POST */
exports.addTask = (req, res) => {
  const task = {id: ++counterTaskId, name: req.body.name}; 
  users.forEach((user) => {
    if(user.userId == req.params.userId) {
      user.tasks.push(task);
      res.send(task);
    }
  });
};

/* PUT */
exports.editTaskWithId = (req, res) => {
  users.forEach((user) => {
    if(user.userId == req.params.userId) {
      user.tasks.forEach((task) => {
        if(task.id == req.params.taskId) {
          task.name = req.body.name;
          res.send(task);
        }
      });
    }
  });
};

/* DELETE */
exports.deleteTaskWithId = (req, res) => {
  users.forEach((user) => {
    if(user.userId == req.params.userId) {
      for(let i = 0; i < user.tasks.length; i++) {
        if(user.tasks[i].id == req.params.taskId) {
          user.tasks.splice(i, 1);
          res.send({tasks: user.tasks});
        }
      }
    }
  });
};
