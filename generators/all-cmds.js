const fs = require("fs")
let allCmds = `// DO NOT EDIT THIS FILE
// IT IS AUTOMATICLY GENERATED BY FILE ${__filename.replace(__dirname, "")}
function talk(msg) {
  artyom.say(msg, {
    onStart: () => {
    },
    onEnd: () => {
    }
  });
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

`
let cmdNames = ""
fs.readdirSync("./client/scripts/cmd").filter(e => e != "all.js").forEach(file => {
  let data = fs.readFileSync("./client/scripts/cmd/" + file, "utf8")
  cmdNames += "..." + data.match(/(?=const ).+\=/)[0].replace(/const|\=/g, "").trim() + ","
  allCmds += data + "\n"
})
allCmds += `let allCommands = [${cmdNames}];export {allCommands}`
fs.writeFileSync("./client/scripts/cmd/all.js", allCmds)