const fs = require("fs");

fs.readdir(process.argv[2], (err, list) => {
    if (err) {
        console.log(err);
    } else {
        const ext = process.argv[3];
        list.forEach((file) => {
            if (file.includes(`.${ext}`)) {
                console.log(file.trim(`.${ext}`));
            }
        });
    }
});
