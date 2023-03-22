const fs = require('fs')
const path = require('path')

const router = (req, res) => {
    const filePath = path.join(__dirname, '..', '..', 'public', 'index.html')
    if (req.url === '/') {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            } else {
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.end(data)
            }
        })
    }
}

module.exports = router