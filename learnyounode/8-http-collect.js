const http = require("http");

http.get(process.argv[2], (response) => {
    response.setEncoding("utf8");
    let data = "";
    response.on("data", (eventData) => {
        data += eventData;
    });
    response.on("end", () => {
        console.log(data.length);
        console.log(data.toString());
    });
}).on("error", (error) => {
    console.log(error);
});
