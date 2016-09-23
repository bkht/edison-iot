var mraa = require('mraa');
var pin13 = new mraa.Gpio(13);
pin13.dir(mraa.DIR_OUT);
var counter = 0;
setInterval(function(){
    counter++;
    if (counter & 1)
        pin13.write(0);
    else
        pin13.write(1);
}, 500);
console.log('Done!!!');
