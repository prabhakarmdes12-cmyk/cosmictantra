
const router=require("express").Router()
const ctrl=require("../controllers/astrologyController")
router.post("/chart",ctrl.generateChart)
module.exports=router
