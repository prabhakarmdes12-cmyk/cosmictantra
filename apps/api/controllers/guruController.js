
exports.ask = async (req,res)=>{
 const {question}=req.body
 res.json({response:"AI Guru says: meditate and stay focused."})
}
