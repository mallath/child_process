let interval;
interval= setInterval(()=> {
    console.log("New Chunk");
    if(interval._idleStart > 5000) clearInterval(interval);
},1000);

// Process Id
const process = require('process');
console.log("process id is " + process.pid);