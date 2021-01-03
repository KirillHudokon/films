const fs = require('fs');

const parseFile = (file) => {
    console.log(file)
    var array = fs.readFileSync(file).toString().split("\n");
    for(i in array) {
        console.log(array[i]);
    }
}
module.exports = parseFile