const robot = require('robotjs');
setInterval(() => {
  var mouse = robot.getMousePos();
  console.log(mouse);
}, 500);
