const fs = require("fs");

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, (err, list) => {
        if (err) {
            return callback(err);
        } else {
            const filtered = new Array();
            list.forEach((file) => {
                if (file.includes(`.${ext}`)) {
                    filtered.push(file.trim(`.${ext}`));
                }
            });
            callback(null, filtered);
        }
    });
};
