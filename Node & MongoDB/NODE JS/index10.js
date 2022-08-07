//The OS module provides operating system related utility methods and properties.
//It can be accessed using:-
const os = require("os");
console.log(os.arch());      // x64
console.log(os.hostname());  // LAPTOP-E2G0QA3D
console.log(os.platform());  // win32
console.log(os.tmpdir());    // C:\Users\HP\AppData\Local\Temp
console.log(os.type());      // Windows_NT
console.log(os.endianness()); // LE
console.log(os.freemem());    //2385027072
console.log(os.homedir());    //C:\Users\HP
console.log(os.loadavg());    //[ 0, 0, 0 ]
console.log(os.networkInterfaces());   //  'VirtualBox Host-Only Network'
console.log(os.release());  //10.0.19044
console.log(os.uptime());   //1057132
console.log(os.version());  //Windows 10 Home Single Language
