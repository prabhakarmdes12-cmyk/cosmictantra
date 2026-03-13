
const router=require("express").Router()
const ctrl=require("../controllers/paymentController")
router.post("/order",ctrl.create)
module.exports=router
