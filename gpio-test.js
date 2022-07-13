var gpio = require("gpio");
var gpio6, intervalTimer;
 
// Flashing lights if LED connected to GPIO22
gpio6 = gpio.export(6, {
   ready: function() {
      intervalTimer = setInterval(function() {
         gpio22.set();
         setTimeout(function() { gpio22.reset(); }, 500);
      }, 1000);
   }
});

setTimeout(function() {
   clearInterval(intervalTimer);          // stops the voltage cycling
   gpio6.removeAllListeners('change');   // unbinds change event
   gpio6.reset();                        // sets header to low
   gpio6.unexport();                     // unexport the header
}, 10000)