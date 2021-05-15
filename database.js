const fs = require('fs');

exports.save = (peoples) => {
    fs.writeFileSnyc('./data.json', JSON.stringify(peoples));
    console.log(peoples);
}

exports.load = () => {
    return fs.readFileSync('./data.json', 'utf-8');
}