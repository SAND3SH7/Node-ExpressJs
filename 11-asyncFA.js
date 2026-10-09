//FS module

const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        return;
    }
    const first = result;
    readFile('./content//second.txt', 'utf8', (err, result) => {
        if (err) {
            return;
        }
        const second = result
        writeFile('./content/restult-async.txt', 'hi sandesh', (err, result) => {
            if (err) {
                return;
                console.log(err)
            }
            console.log(result)
        })
    })
})