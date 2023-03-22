const fs = require('fs')
const path = require('path')


const router = (req, res) => {

    let paramsUrl = req.url.split('?')
    var params = new URLSearchParams(paramsUrl[1]);

    const urls = {
        html: {
            '/': 'index.html',
        },
        css: {
            '/style.css': 'style.css',
        },
        js: {
            '/script.js': 'script.js',
        }
    }

    const files = Object.keys(urls)

    files.forEach(file => {
        const paths = Object.keys(urls[file])
        paths.forEach(myPath => {
            console.log(myPath);
            if (req.url === myPath) {
                let filePath = path.join(__dirname, '..', '..', 'public', urls[file][myPath])
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('server error');
                    } else {
                        res.writeHead(200, { 'Content-Type': `text/${file}` });
                        res.end(data);
                    }
                });
            }
        });
    });

    if (req.url === `/search?${params}`) {
        let inputVal = params.get('q')

        let filePath = path.join(__dirname, '..', 'countries.json')


        fs.readFile(filePath, 'utf8', (err, data) => {

            let filteredCount;

            if (err) {
                console.log(err);
                return;
            } else {
                let dataArr = JSON.parse(data)

                filteredCount = dataArr.filter((country) => {
                    return country.name?.toLowerCase().includes(inputVal?.toLowerCase());
                })
            }
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(filteredCount))
        })
    } else if (req.url === '/weather.svg') {
        fs.readFile(path.join(__dirname, '..', '..', 'public', 'weather.svg'), (err, file) => {
            // /* istanbul ignore if */
            if (err) {
                res.writeHead(500, { 'content-type': 'text/plain' });
                res.end('server error');
            } else {
                res.writeHead(200, { 'content-type': 'image/svg+xml' });
                res.end(file);
            }
        });
    }
}

module.exports = router