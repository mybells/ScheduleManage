const express = require('express');
const router = express.Router();

const Schedule = require('../models/Schedule');

/* 插入数据 */
router.post('/insertData', (req, res) => {
  const schedule = new Schedule({ time: req.body.time,content: req.body.content });
  schedule.save().then((data) => res.json(data)).catch(err => res.status(404).json(err));
})
/* 查询所有数据 */
router.get('/getData', (req, res) => {
  Schedule.find().then((data) => res.json(data)).catch(err => res.status(404).json(err));
})
/* 查询一条数据 */
router.get('/getDataById/:id', (req, res) => {
  Schedule.findById(req.params.id).then((data) => res.json(data)).catch(err => res.status(404).json(err));
})
/* 更新一条数据 */
router.post('/updateData/:id', (req, res) => {
  Schedule.findByIdAndUpdate(req.params.id, { time: req.body.time,content: req.body.content }).then(data => res.json(data)).catch(err => res.status(404).json(err))
})
/* 删除一条数据 */
router.get('/deleteData/:id', (req, res) => {
  Schedule.findByIdAndRemove(req.params.id).then(data => res.json(data)).catch(err => res.status(404).json(err))
})
module.exports = router;