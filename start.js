const { spawn } = require('child_process');

// Spawn a Python process
const pyProcess = spawn('python', ['index.py']);

process.on('exit', () => {
  // Kill the Python process
  pyProcess.kill();
});