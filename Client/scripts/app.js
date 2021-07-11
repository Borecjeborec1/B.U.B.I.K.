let speaking = false;
let logged = false;
let spoken = false;
let lastCommand = '';
let lastChoise = '';
let canDo = false;
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
document.getElementById('start').addEventListener('click', () => {
  document.getElementById('start').style.display = 'none';

  toggleFullScreen();

  const artyom = new Artyom();

  artyom.initialize({
    lang: 'en-GB',
    continuous: true,
    soundex: true,
    debug: true,
    listen: true,
  });

  function addLoginCommands() {
    artyom.addCommands([
      {
        indexes: ['i am robin', "i'm robin", 'i am rubbing ', "i'm rubbing ", 'i am luke', "i'm luke"],
        action: (i) => {
          if (lastCommand != 'author login') {
            logged = 'author';
            lastCommand = 'author login';
            artyom.say('Systems are now fully operational!', {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
                canDo = false;
              },
            });
          }
        },
      },
      {
        indexes: ['i am elizabeth', "i'm elizabeth"],
        action: (i) => {
          if (lastCommand != 'guest login') {
            logged = 'guest';
            lastCommand = 'guest login';

            artyom.say('Systems are now prepared. What do you need from me princess?', {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
                canDo = false;
              },
            });
          }
        },
      },
      {
        indexes: ['logout', 'look out', 'cork out', 'broke out'],
        action: (i) => {
          logged = !!!logged;
          artyom.emptyCommands();
          addLoginCommands();
          lastCommand = 'logout';
          artyom.say('Successfully loged out', {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
              setTimeout(() => {
                artyom.say('Who are you?', {
                  onStart: function () {
                    speaking = true;
                  },
                  onEnd: function () {
                    speaking = false;
                    canDo = false;
                    setTimeout(() => {
                      if (logged == 'author') {
                        console.log('Logged as author');
                        addBonusCommands();
                        addCommands();
                      } else if (logged == 'guest') {
                        console.log('Logged as quest');
                        addCommands();
                      }
                    }, 10000);
                    addLoginCommands();
                  },
                });
              }, 500);
              addLoginCommands();
            },
          });
        },
      },
    ]);
  }
  function addCommands() {
    artyom.addCommands([
      // HEY BUBIK
      {
        indexes: ['hey baby', 'hey aerophobic', 'hey movie', 'hey google', 'hey bich', 'hey will pick', 'haybrook'],
        action: (i) => {
          let arr = ['Yes Sir?', "What's up?", "What's up, sir?", 'What do you need Sir?'];
          if (lastCommand != 'hey') {
            lastCommand = 'hey';
            artyom.say(arr[Math.floor(Math.random() * arr.length)], {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
                canDo = false;
                canDo = true;
              },
            });
          } else {
            artyom.say('I can hear you!!', {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
                canDo = false;
              },
            });
          }
        },
      },
      // HOW ARE YOU
      {
        indexes: ['how are you', "what's up", 'how is it going'],
        action: (i) => {
          let arr = [
            'Pretty good, thanks',
            'I’m OK.',
            'Just the same old same old',
            'Much better now that you are with me',
            'pretty standard right now.',
            'Surviving, I guess.',
          ];
          let r = Math.floor(Math.random() * arr.length);
          if (lastCommand != 'how are you') {
            lastCommand = 'how are you';
            lastChoise = r;
            artyom.say(arr[r], {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
                canDo = false;
              },
            });
          } else {
            artyom.say("I have already said that I'm " + arr[lastChoise], 'but still, thanks for asking', {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
                canDo = false;
              },
            });
          }
        },
      },
      // LONG DAY
      {
        indexes: ['what day is it', 'what time is it today', "what's the day"],
        action: (i) => {
          let res;
          const date = new Date();

          res =
            'Today is ' +
            dayNames[date.getDay()] +
            ' ' +
            date.getDate() +
            ' ' +
            monthNames[date.getMonth()] +
            date.getFullYear();
          artyom.say(res, {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
        },
      },
      // EXACT TIME
      {
        indexes: ['what time is it', 'time', "what's the time"],
        action: (i) => {
          let res;
          let d = new Date();
          let h = d.getHours();
          let m = d.getMinutes();
          res = h + ' ' + m;
          artyom.say(res, {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
        },
      },
      // COIN FLIP
      {
        indexes: ['flip a coin', 'flip coin', 'coin flip'],
        action: (i) => {
          let arr = ['head', 'tail'];

          artyom.say(arr[Math.floor(Math.random() * 2)], {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
        },
      },
      // KNOCK KNOCK
      {
        indexes: ['knock knock'],
        action: (i) => {
          let arr = ['Who is there?', 'Get out.', 'Get the fuck out!'];
          let r = Math.floor(Math.random() * arr.length);
          artyom.say(arr[r], {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              if (r == 0) {
                setTimeout(() => {
                  artyom.say('HA. HA. HA. That was really funny...', {
                    onStart: function () {
                      speaking = true;
                    },
                    onEnd: function () {
                      speaking = false;
                      canDo = false;
                    },
                  });
                }, 3000);
              }
              speaking = false;
              canDo = false;
            },
          });
        },
      },
      // THROW A DICE
      {
        indexes: ['throw a dice', 'throw dice', 'dice'],
        action: (i) => {
          artyom.say('' + Math.round(Math.random() * 6), {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
        },
      },
      // THROW A TWO DICE
      {
        indexes: ['throw two dices', 'throw two dice', 'two dices'],
        action: (i) => {
          artyom.say('' + Math.round(Math.random() * 12), {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
        },
      },
      // THANKS
      {
        indexes: ['thanks', 'thank you'],
        action: (i) => {
          let all = ['Anything for you!', "You're welcome!", 'Happy I could be of help.', 'It’s my pleasure.'];
          lastCommand = 'thanks';
          artyom.say(all[Math.floor(Math.random() * all.length)], {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
        },
      },
      // HELLO
      {
        indexes: ['hello'],
        action: (i) => {
          lastCommand = 'hello';
          let all = ['Good Morning!', 'Good Afternoon!', 'Good Evening!', 'Hello Sir.', 'Hi!'];
          let random = Math.floor(Math.random() * all.length);

          if (random < 3) {
            let cd = new Date();
            if (cd.getHours() > 12 && cd.getHours() < 20) {
              random = 1;
            } else if (cd.getHours() < 12 && cd.getHours() > 4) {
              random = 0;
            } else {
              random = 2;
            }
          }

          artyom.say(all[random], {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
        },
      },
      // CREATED BY
      {
        indexes: ['who made you', 'who is your father'],
        action: (i) => {
          artyom.say('I have been created by Mister Robin.', {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
        },
      },
      // CALCULATE
      {
        smart: true,
        indexes: ['calculate *'],
        action: (i, wildcard) => {
          let res = eval(wildcard.replaceAll('÷', '/').replaceAll('x', '*')).toString();
          if (res) {
            artyom.say('The answer is' + res, {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
                canDo = false;
              },
            });
          } else {
            artyom.say("I am sorry, I couldn't solve that instance", {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
                canDo = false;
              },
            });
          }
        },
      },
      // STOP MINUTES
      {
        smart: true,
        indexes: ['stop *-minute', 'start * minute timer', 'start *-minute timer'],
        action: (i, s) => {
          let amount = s.split('').map((el) => typeof +el == 'number');
          artyom.say(`Started an ${amount} minute timer. `, {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
          console.log(amount * 1000 * 60);
          console.log(amount);
          setTimeout(() => {
            artyom.say(`Tudum, Tudum, the timer is gone!!`, {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
                canDo = false;
              },
            });
          }, amount * 1000 * 60);
        },
      },
      // JOKE
      {
        indexes: ['tell me a joke', 'joke', 'tell me joke'],
        action: async (i) => {
          let res = await fetch('https://icanhazdadjoke.com/slack').then((res) => res.json());
          artyom.say(res.attachments[0].text, {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
        },
      },
      // WEATHER
      {
        indexes: ['weather', "what's the weather", "what's the weather like today"],
        action: async (i) => {
          const url = `http://api.openweathermap.org/data/2.5/weather?id=3076127&appid=be9ac2f722c2946c2aa205a2946f0a03`;
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              artyom.say(
                `In city Freedek-Meestek is ${~~(data.main.temp - 273.15)}°C, and it's ${data.weather[0].description}`,
                {
                  onStart: function () {
                    speaking = true;
                  },
                  onEnd: function () {
                    speaking = false;
                    canDo = false;
                  },
                }
              );
            })
            .catch((err) => {
              console.error(err);
            });
        },
      },
      // CURRENCY EURO
      {
        smart: true,
        indexes: ['convert €*'],
        action: async (i, amount) => {
          let res = await fetch(
            'https://exchange-rates.abstractapi.com/v1/live?api_key=ae327572a7f744999411cf98514d43af&base=EUR'
          ).then((res) => res.json());

          artyom.say("It's " + ~~(amount * res.exchange_rates.CZK) + ' Czech crowns sir.', {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
        },
      },
      // CURRENCY DOLLAR
      {
        smart: true,
        indexes: ['convert $*'],
        action: async (i, amount) => {
          let res = await fetch(
            'https://exchange-rates.abstractapi.com/v1/live?api_key=ae327572a7f744999411cf98514d43af&base=USD'
          ).then((res) => res.json());

          artyom.say("It's " + ~~(amount * res.exchange_rates.CZK) + ' Czech crowns sir.', {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
        },
      },
      // FIND DDG
      {
        smart: true,
        indexes: ['search *'],
        action: (i, s) => {
          sendData('search', s.split(' ').join('+'));
          artyom.say('Looking for ' + s, {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
        },
      },
    ]);
  }
  function addBonusCommands() {
    artyom.addCommands([
      // RESTART
      {
        indexes: ['i need to restart you'],
        action: (i) => {
          let arr = ['OK sir. I hope you will launch me again.'];

          artyom.say(arr[Math.floor(Math.random() * arr.length)], {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
        },
      },
      // NOTES
      {
        smart: true,
        indexes: ['add * into calendar', 'at * into calendar', 'save * into calendar', 'safe * into calendar'],
        action: async (i, noteName) => {
          artyom.say('On which date?', {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
              artyom.addCommands([
                {
                  smart: true,
                  indexes: ['on *'],
                  action: (i, dateName) => {
                    for (let i = 0; i < monthNames.length; ++i) {
                      if (dateName.toString().toLowerCase().includes(monthNames[i].toLowerCase())) {
                        let num = +i + 1;
                        if (i < 10) {
                          console.log(i);
                          dateName =
                            '2021-' +
                            dateName
                              .toString()
                              .toLowerCase()
                              .replaceAll(i, '0' + i)
                              .replaceAll(monthNames[i].toLowerCase(), '0' + num)
                              .replaceAll('of', '')
                              .replaceAll('the', '')
                              .replaceAll('th', '')
                              .replaceAll(' ', '-')
                              .replaceAll('--', '-')
                              .replaceAll('- -', '-')
                              .replaceAll('--', '-')
                              .split('-')
                              .reverse()
                              .join(' ')
                              .replaceAll(' ', '-');
                        } else {
                          console.log(i);
                          dateName =
                            '2021-' +
                            dateName
                              .toString()
                              .toLowerCase()
                              .replaceAll(monthNames[i], num)
                              .replaceAll('of', '')
                              .replaceAll('the', '')
                              .replaceAll('th', '')
                              .replaceAll(' ', '-')
                              .replaceAll('--', '-')
                              .split('-')
                              .reverse()
                              .join(' ')
                              .replaceAll(' ', '-');
                        }
                      }
                    }
                    let notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
                    let obj = { name: noteName, onDate: dateName, fromDate: new Date() };
                    notes[notes.length] = obj;
                    notes.sort((a, b) => {
                      let fa = a.onDate.toLowerCase(),
                        fb = b.onDate.toLowerCase();

                      if (fa < fb) {
                        return -1;
                      }
                      if (fa > fb) {
                        return 1;
                      }
                      return 0;
                    });
                    console.log(notes);
                    localStorage.setItem('notes', JSON.stringify(notes));
                    let sayDate = new Date(dateName);
                    let finalSay =
                      dayNames[sayDate.getDay()] +
                      '' +
                      sayDate.getDate() +
                      '' +
                      monthNames[sayDate.getMonth()] +
                      '' +
                      sayDate.getFullYear();
                    artyom.say(`Note Saved on ${finalSay}!`, {
                      onStart: function () {
                        speaking = true;
                      },
                      onEnd: function () {
                        speaking = false;
                        canDo = false;
                      },
                    });
                    console.log(JSON.parse(localStorage.getItem('notes')));
                  },
                },
              ]);
            },
          });
        },
      },
      // NEAR NOTES
      {
        indexes: [
          'what is the closest note',
          'what is  closest note',
          'closest note',
          'closest node',
          'close note',
          'close node',
        ],
        action: (i) => {
          let notes = JSON.parse(localStorage.getItem('notes'));
          let note = notes[0];
          console.log(notes);
          console.log(note);
          let sayDate = new Date(note.onDate);
          console.log(sayDate);
          let finalSay = dayNames[sayDate.getDay()] + ' ' + sayDate.getDate() + ' ' + monthNames[sayDate.getMonth()];
          console.log(finalSay);
          res = `The closest note is ${note.name} on ${finalSay}.`;
          artyom.say(res, {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
        },
      },
      // SHUTDOWN
      {
        indexes: ['shut down yourself', 'shutdown yourself', 'exit', 'shutdown', 'shut down'],
        action: (i) => {
          if (canDo) {
            artyom.fatality().then(() => {
              artyom.say('I hope I will hear you again. Have a great day. Bye', {
                onStart: function () {
                  speaking = true;
                },
                onEnd: function () {
                  speaking = false;
                  canDo = false;
                  setTimeout(() => {
                    window.close();
                  }, 400);
                },
              });
            });
          } else {
            artyom.say("I'm sorry, you can't do that now!", {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
              },
            });
          }
        },
      },
      // OPEN
      {
        smart: true,
        indexes: ['open *'],
        action: (i, appName) => {
          let app = appName;
          switch (appName) {
            case 'lol':
            case 'league':
            case 'league of legends':
              app = 'league of legends';
              break;
            case 'discord':
            case 'dis':
            case 'this':
              app = 'discord';
              break;
            case 'teams':
            case 'team':
            case 'theme':
            case 'themes':
              app = 'teams';
              break;
            case 'brave':
            case 'browser':
              app = 'brave';
              break;
            case 'epic':
            case 'epic games':
              app = 'epic games';
              break;
            case 'vs code':
            case 'code':
            case 'visual studio':
            case 'visual studio code':
              app = 'visual studio code';
              break;
          }
          sendData('open', app);
          artyom.say(`Opening ${app}!`, {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
        },
      },
      // SHAKES
      {
        indexes: ['play shakes'],
        action: (i) => {
          if (canDo) {
            sendData('shakes', 'full tavern');
            artyom.say(`Playing Shakes and Fidget!`, {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
                canDo = false;
                setTimeout(() => {
                  artyom.say(`Finished! Do you need anything else sir?`, {
                    onStart: function () {
                      speaking = true;
                    },
                    onEnd: function () {
                      speaking = false;
                      canDo = false;
                    },
                  });
                }, 23000);
              },
            });
          } else {
            artyom.say("I'm sorry, you can't do that now!", {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
              },
            });
          }
        },
      },
      // WHAT IS
      {
        smart: true,
        indexes: ['what is *', 'who is *'],
        action: async (i, wanted) => {
          let res = await sendData('wiki', wanted);
          console.log(res.description);
          if (res.description) {
            artyom.say(`${wanted} is ${res.description}`, {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
                canDo = false;
              },
            });
          } else {
            artyom.say(`I'm really sorry, but I could not find ${wanted}`, {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
                canDo = false;
              },
            });
          }
        },
      },
      // WIKI IMAGE
      {
        smart: true,
        indexes: ['how does * look like'],
        action: async (i, wanted) => {
          sendData('wikiImage', wanted);
          artyom.say(`${wanted} looks somehow like this.`, {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
        },
      },
      // LOL ACCEPT
      {
        indexes: ['accept the match', 'accept the game'],
        action: (i) => {
          sendData('lol', 'accept');
          artyom.say(`Match Accepted!`, {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
        },
      },
      // LOL FLASH
      {
        smart: true,
        indexes: ['* flash', '* flashed', '* flight', '* flighted', '* flushed'],
        action: (i, champ) => {
          artyom.say(`${champ} flashed.`, {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
          setTimeout(() => {
            artyom.say(`${champ} will have flash in 1 minute.`, {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
                canDo = false;
              },
            });
            setTimeout(() => {
              artyom.say(`${champ} has flash right now.`, {
                onStart: function () {
                  speaking = true;
                },
                onEnd: function () {
                  speaking = false;
                  canDo = false;
                },
              });
            }, 1000 * 60);
          }, 1000 * 60 * 4);
        },
      },
      // LOL IGNITE
      {
        smart: true,
        indexes: ['* ignite', '* tonight', '* goodnight', '* the light', '* light'],
        action: (i, champ) => {
          artyom.say(`${champ} ignited.`, {
            onStart: function () {
              speaking = true;
            },
            onEnd: function () {
              speaking = false;
              canDo = false;
            },
          });
          setTimeout(() => {
            artyom.say(`${champ} will have ignite in 1 minute.`, {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
                canDo = false;
              },
            });
            setTimeout(() => {
              artyom.say(`${champ} has ignite right now.`, {
                onStart: function () {
                  speaking = true;
                },
                onEnd: function () {
                  speaking = false;
                  canDo = false;
                },
              });
            }, 1000 * 60);
          }, 1000 * 60 * 2);
        },
      },
      // SHUTDOWN SYSTEMS
      {
        indexes: ['shutdown all systems'],
        action: (i) => {
          if (canDo) {
            sendData('child_process', 'shutdown');
          } else {
            artyom.say(`I'm really sorry, but you can't do that now!`, {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
                canDo = false;
              },
            });
          }
        },
      },
      // RESTART SYSTEMS
      {
        indexes: ['restart all systems'],
        action: (i) => {
          if (canDo) {
            sendData('child_process', 'restart');
          } else {
            artyom.say(`I'm really sorry, but you can't do that now!`, {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
                canDo = false;
              },
            });
          }
        },
      },
      // SLEEP SYSTEMS
      {
        indexes: ['hibernate all systems'],
        action: (i) => {
          if (canDo) {
            sendData('child_process', 'sleep');
          } else {
            artyom.say(`I'm really sorry, but you can't do that now!`, {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
                canDo = false;
              },
            });
          }
        },
      },
    ]);
  }

  setTimeout(() => {
    artyom.say('All systems will be prepared in a few seconds.', {
      onStart: function () {
        setTimeout(() => {
          artyom.say(
            "Allow me to introduce myself. I am boobeek, virtual artificial intelligence and I'm here to assist you with a variety of tasks as best as I can. Who are you?",
            {
              onStart: function () {
                speaking = true;
              },
              onEnd: function () {
                speaking = false;
                setTimeout(() => {
                  if (logged == 'author') {
                    console.log('Logged as author');
                    addBonusCommands();
                    addCommands();
                  } else if (logged == 'guest') {
                    console.log('Logged as guest');
                    addCommands();
                  }
                }, 7000);
                addLoginCommands();
              },
            }
          );
        }, 5000);
      },
    });
  }, 1000);
});

(function handleCanvas() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  circleArray = [];
  circleArray1 = [];

  class Circle {
    constructor(size) {
      this.baseSize = size;
      this.size = size;
      this.opacity = 0.02;
    }
    draw() {
      ctx.beginPath();
      ctx.globalAlpha = this.opacity;
      ctx.arc(canvas.width / 2, canvas.height / 2, this.size, 0, 2 * Math.PI);
      ctx.strokeStyle = '#009ACD';
      ctx.lineWidth = 5;
      ctx.stroke();
    }
    update() {
      this.size++;
      this.baseSize > 500
        ? this.size <= 630
          ? (this.opacity -= 0.0005)
          : (this.opacity = 0)
        : this.size <= 380
        ? (this.opacity -= 0.0005)
        : (this.opacity = 0);
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (speaking) {
      circleArray.push(new Circle(Math.random() * (630 - 580) + 580));
      circleArray1.push(new Circle(Math.random() * (330 - 280) + 320));
    }
    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
      circleArray[i].draw();

      if (circleArray[i].size >= 630) {
        circleArray.splice(i, 1);
      }
    }
    for (let i = 0; i < circleArray1.length; i++) {
      circleArray1[i].update();
      circleArray1[i].draw();

      if (circleArray1[i].size >= 380) {
        circleArray1.splice(i, 1);
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
})();
function toggleFullScreen() {
  if (
    (document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)
  ) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}
async function sendData(command, app) {
  let res = await fetch(`http://localhost:3000/command/${command}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ app: app }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((er) => console.error(er));
  return res;
}
