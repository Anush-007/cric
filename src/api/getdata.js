const { spawn } = require('child_process');
const data1 = []; // Store readings

const sensor = spawn('python', ['getdata.py']);
sensor.stdout.on('data', function() {

    // convert Buffer object to Float
    data1.push(data);
    console.log(data1);
});