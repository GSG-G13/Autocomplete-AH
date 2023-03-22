// router
// end point /search?q=${input.value}

// H



// var params = new URLSearchParams('user=abc&q=xyz');
// console.log(params.get('user'));
// console.log(params.get('q'));

const http = require('http')
const PORT = 4000

const router = require('./modules/router')

const server = http.createServer(router)
server.listen(PORT, () => {
    console.log(`Server Is Running on Port: ${PORT}`);
})