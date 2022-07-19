const net = require("net");

function zeroFill(number) {
    return number.toString().padStart(2, "0");
}

function formatDate(date) {
    return (
        date.getFullYear() +
        "-" +
        zeroFill(date.getMonth() + 1) +
        "-" +
        zeroFill(date.getDate()) +
        " " +
        zeroFill(date.getHours()) +
        ":" +
        zeroFill(date.getMinutes())
    );
}

const server = net.createServer(function (socket) {
    const date = new Date();
    socket.write(formatDate(date) + "\n");
    socket.end();
});
server.listen(parseInt(process.argv[2]));
