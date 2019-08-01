const mongoose = require('mongoose');

// 模型骨架
var Schema = new mongoose.Schema({
  time: {type: Date},
  content: {type: String}
});
// 由schema构造生成Model
var Schedule = mongoose.model('schedule', Schema);//集合是小写复数schedules
  
module.exports = Schedule;