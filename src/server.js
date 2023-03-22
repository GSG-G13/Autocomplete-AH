const http = require('http')
const PORT = 4000

const router = require('./modules/router')

const server = http.createServer(router)
server.listen(PORT, () => {
    console.log(`Server Is Running on Port: ${PORT}`);
})