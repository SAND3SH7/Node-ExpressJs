const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our homepage')
    }
    if (req.url === '/about') {
        res.end('hereis our short history')
    }
    res.end(`
        <h1>oops!</h1>
        <p>cant seem to find the page</p>
        <a href="/">back hone</a>
        `)

})

server.listen(5000)

