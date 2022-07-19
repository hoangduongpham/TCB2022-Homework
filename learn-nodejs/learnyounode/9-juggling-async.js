const http = require("http");

function getData(url) {
    http.get(url, (response) => {
        response.setEncoding("utf8");
        let data = "";
        response.on("data", (eventData) => {
            data += eventData;
        });
        response.on("end", () => {
            console.log(data);
        });
    }).on("error", (error) => {
        console.log(error);
    });
}

for (let i = 2; i < process.argv.length; i++) {
    setTimeout(() => {
        getData(process.argv[i]);
    }, 500 * i);
}
