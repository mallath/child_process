//Spawn function

const {spawn} = require('child_process');

let listFiles = spawn("dir",["/b"], { shell : true })
listFiles.stderr.on("data", (error) => {
    console.log(error)
})
listFiles.stdout.on("data", (data) => {
    console.log(data.toString())
})
listFiles.on('error', (error) => {
    console.error(`Some error occurred: ${error.message}`);
});

//Exec Function

const { exec } = require('child_process');
exec("node app.js", (error, stdout, stderr) => {
   if (error) { 
      return console.log(error) 
    }
    if (stderr) {
         return console.log(stderr) 
        }
    console.log(stdout);
});
let spawnEx=spawn("node",["app.js"], {shell:true})
spawnEx.stdout.on("data",data=>console.log("Spawn",data.toString()))
spawnEx.stderr.on("data",err=>console.log(err))


// ExecFile Function 
const { execFile } = require('child_process');
execFile("node",["--version"],  (error, stdout, stderr) => {
  if(error) { throw error }
  console.log("Output: " + stdout)
})

 //Fork function
 const { fork} = require('child_process');
const child = fork("./cd.js"["hello", 1, "program"]);

child.send({ message: "Hello child" })

child.on("close",(code)=>{
  console.log("child process exited with code", code);
 })
child.on("message", (msg) => {
  console.log("Message from child", msg);
})


const http = require('http');
const server = http.createServer();
server.on("request", (req, res) => {
  if (req.url == "/heavy") {
    const child=fork("./cd.js")
    child.send("start")
    res.end(`${counter} iterations completed \\n`);
    console.log("Heavy request");

  }
  else if (req.url == "/light") {
    res.end("Success! Operation complete! \\n")
    console.log("Light request")}
})
server.listen(3000, () => console.log("Listening to port 3000"))

