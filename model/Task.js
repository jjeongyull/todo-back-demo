const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskShema = Schema({
  task: {
    type: String,
    require: true // 필수 값
  },
  isComplete: {
    type: Boolean,
    require: true // 필수 값
  }
});

const Task = mongoose.model("Task", taskShema);
module.exports = Task;