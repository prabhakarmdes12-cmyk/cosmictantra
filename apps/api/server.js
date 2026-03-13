
const express = require("express")
const cors = require("cors")

const astrologyRoutes = require("./routes/astrology")
const guruRoutes = require("./routes/guru")
const paymentRoutes = require("./routes/payments")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/astrology", astrologyRoutes)
app.use("/guru", guruRoutes)
app.use("/payments", paymentRoutes)

app.listen(5000, ()=>{
 console.log("CosmicTantra API running on 5000")
})
