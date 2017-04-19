var fs = require('fs');

// Store json

var map = [];

fs.readFile('./map.csv', (err, data) => {
    if (err) throw err;

    var csv = data.toString();

    var row = csv.split('\r\n');

    for (var i = 1 in row) {
        if (row[i].replace(/ +/g, "").length > 1)  {
            var currentRow = row[i].split(',');
            map.push({
                'id': currentRow[0],
                'area': currentRow[1]
            });
        }
    }

    fs.writeFile('map.json', JSON.stringify(map, null, 4), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});

