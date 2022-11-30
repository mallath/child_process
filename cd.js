console.log("Child process")

console.log(process.argv)

process.on("message", (msg) => {
    console.log("Message from parent", msg);
    process.exit(0)
})

process.send({ message: "child message to parent" })

process.on("message", msg => {
    let counter = 0;
    while (counter < 9000000000) {
        counter++;
    }
    process.send(`${counter} iterations completed \\n`)
})