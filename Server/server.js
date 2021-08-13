const express = require('express');
const cors = require('cors');
const open = require('open');
const robot = require('robotjs');
const tldr = require('wikipedia-tldr');
const { exec } = require('child_process');
const fetch = require('node-fetch');

const changeBG = require('./changeBG');

const app = express();
const PORT = process.env.PORT || 3000;
frontendSetup();

app.use(express.json());
app.use(cors());

app.post('/command/open', async (req, res) => {
  let command = req.body.app;
  switch (command) {
    case 'league of legends':
      await open('C:/Users/ZISU00/AppData/Roaming/Microsoft/Windows/Start Menu/Programs/Riot Games/League of Legends', {
        wait: true,
      });
      break;
    case 'discord':
      await open('C:/Users/ZISU00/AppData/Roaming/Microsoft/Windows/Start Menu/Programs/Discord Inc/Discord', {
        wait: true,
      });
      break;
    case 'teams':
      await open('C:/Users/ZISU00/AppData/Roaming/Microsoft/Windows/Start Menu/Programs/Microsoft Teams', {
        wait: true,
      });
      break;
    case 'brave':
      await open('C:/ProgramData/Microsoft/Windows/Start Menu/Programs/Brave', {
        wait: true,
      });
      break;
    case 'epic games':
      await open('C:/ProgramData/Microsoft/Windows/Start Menu/Programs/Epic Games Launcher', {
        wait: true,
      });
      break;
    case 'visual studio code':
      await open(
        'C:/Users/ZISU00/AppData/Roaming/Microsoft/Windows/Start Menu/Programs/Visual Studio Code/Visual Studio Code',
        {
          wait: true,
        }
      );
      break;
  }
});

app.post('/command/shakes', async (req, res) => {
  let command = req.body.app;

  setTimeout(async () => {
    for (let i = 0; i < 12; ++i) {
      await hospodaSingle();
    }
  }, 4000);
});

app.post('/command/lol', async (req, res) => {
  let command = req.body.app;
  switch (command) {
    case 'accept':
      robot.moveMouse(986, 676);
      robot.mouseClick();
      break;
    case 'pick':
      robot.moveMouse(1065, 313);
      robot.mouseClick();
      break;
  }
});

app.post('/command/search', async (req, res) => {
  open(`https://duckduckgo.com/?q=${req.body.app}&t=brave&ia=web`);
});
app.post('/command/wiki', async (req, res) => {
  let wikiRes = await tldr(req.body.app);
  res.send(wikiRes);
});
app.post('/command/wikiImage', async (req, res) => {
  let wikiRes = await tldr(req.body.app).then((data) => {
    open(`${data.originalimage.source}`);
  });
});
app.post('/command/child_process', async (req, res) => {
  let command = req.body.app;
  console.log(command);
  switch (command) {
    case 'shutdown':
      exec('shutdown -s');
      console.log(command);
      break;
    case 'restart':
      exec('shutdown -r');
      console.log(command);
      break;
    case 'sleep':
      exec('shutdown -h');
      console.log(command);

      break;
  }
});
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

function hospodaSingle() {
  robot.setMouseDelay(1);
  robot.moveMouse(750, 629);
  robot.mouseClick();
  robot.setMouseDelay(1);
  robot.moveMouse(1060, 629);
  robot.mouseClick();
  robot.setMouseDelay(1);
  robot.moveMouse(1277, 629);
  robot.mouseClick();
  robot.setMouseDelay(250);
  robot.moveMouse(1118, 760);
  robot.mouseClick();
  robot.setMouseDelay(250);
  robot.moveMouse(1398, 955);
  robot.mouseClick();
  robot.setMouseDelay(250);
  robot.moveMouse(1065, 943);
  robot.mouseClick();
  robot.setMouseDelay(250);
  robot.mouseClick();
}
app.get('/startup', async (req, res) => {
  let changedBG = await changeBG();
  let nameDay = await fetch('https://svatky.adresa.info/json').then((res) => res.json());
  let resObj = {
    didChangedBG: changedBG,
    nameDay: nameDay,
  };
  res.send(resObj);
});
async function frontendSetup() {
  robot.moveMouse(41, 139);
  robot.mouseClick();
  robot.mouseClick();
  robot.setMouseDelay(2500);
  robot.moveMouse(930, 450);
  robot.mouseClick();
}
