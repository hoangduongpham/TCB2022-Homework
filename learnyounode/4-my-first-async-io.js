const fs = require("fs");

fs.readFile(process.argv[2], (err, file) => {
    if (err) {
        console.log(err);
    } else {
        const data = file.toString();
        console.log(data.split("\n").length - 1);
    }
});
