const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res)=>{
    try {
        res.status(200).json(
            {
                "email": "katotodan@gmail.com",
                "current_datetime": new Date().toISOString(),
                "github_url": "https://github.com/Katotodan/public-API"
            }
        )
        
    } catch (error) {
        res.status(500).json(
            {
                "status": 500,
                "request": "fails"
            }
        )
    }
    
})

app.listen("5000", ()=> console.log("Server running on port 5000"))