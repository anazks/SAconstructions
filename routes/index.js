var express = require('express');
const { route } = require('./admin');
var router = express.Router();
var fileModel = require('../model/FileModel')

/* GET home page. */
router.get('/',  async function(req, res, next) {
  try {
    let previousWorks =  await fileModel.find({category:'previous-work'})
    let Interior = await fileModel.find({category:'Interior'})
    console.log(previousWorks)
    console.log(Interior)
     res.render('user/index', { previousWorks,Interior});
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
});
router.get('/About',(req,res)=>{
    res.render('user/about')
})
router.get('/interior', async(req,res)=>{
  try {
    console.log("interior-----------")
    let data =await fileModel.find({category:'Interior'})
    console.log(data,"data from interiour")
    res.render('user/property-grid',{data})
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
})
module.exports = router;
