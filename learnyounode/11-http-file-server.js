const fs = require("fs");
const http = require("http");

const server = http.createServer(function (req, res) {
    const file = fs.createReadStream(process.argv[3]);
    file.pipe(res);
});
server.listen(parseInt(process.argv[2]));
