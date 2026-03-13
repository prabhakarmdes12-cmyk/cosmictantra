
const router=require("express").Router()
const ctrl=require("../controllers/guruController")
router.post("/ask",ctrl.ask)
module.exports=router
