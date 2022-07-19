const http = require("http");

const server = http.createServer(function (req, res) {
    if (req.url.includes("/api/parsetime")) {
        const date = new Date(req.url.split("?")[1].split("=")[1]);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds(),
            })
        );
    }
    if (req.url.includes("/api/unixtime")) {
        const date = new Date(req.url.split("?")[1].split("=")[1]);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                unixtime: date.getTime(),
            })
        );
    }
});
server.listen(parseInt(process.argv[2]));
