
const http = require("http");
const fs = require("fs");
const toUpper = require('./util.js');
require("dotenv").config();

const PORT = process.env.PORT
const folder = process.argv[2];
const server = http.createServer((req, res) => {

    
    fs.readdir(folder, (err, files) => {
        if (err) console.log(err)
        else {
            res.writeHead(200, { "Context-Type": "text/plain; charset=utf-8" });
            files.forEach(f => res.write(`${toUpper(f)}\n`));
            res.end("Instituto de computação");
        }
    })


})

server.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
})