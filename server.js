const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
    origin: 'http://localhost:8081'
}

// middlewares
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// router
const router = require('./routers/productRouters.js')
app.use('/api/products',router)

// tasting api
app.get('/', (res, req) => {
    res.json({ message: "hello Form Api" })
})

// port
const PORT = process.env.PORT || 8080

// server
app.listen(PORT, () => {
    console.log(`server is runing port ${PORT}`)
})

