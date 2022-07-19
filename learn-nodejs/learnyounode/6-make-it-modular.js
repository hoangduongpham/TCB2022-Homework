const mymodule = require("./6-mymodule");

function callback(err, data) {
    if (err) {
        console.log(err);
    } else {
        data.forEach((file) => {
            console.log(file);
        });
    }
}

mymodule(process.argv[2], process.argv[3], callback);
