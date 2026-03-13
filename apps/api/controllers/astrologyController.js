
exports.generateChart = async (req,res)=>{
 const {date}=req.body
 res.json({message:"chart generated",date})
}
