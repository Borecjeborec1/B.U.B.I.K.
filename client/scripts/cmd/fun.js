const funCommands = [
  // THROW A DICE
  {
    indexes: ['throw a dice', 'throw dice', 'dice'],
    action: (i) => {
      talk('' + Math.round(Math.random() * 6));
    },
  },
  // THROW A TWO DICE
  {
    indexes: ['throw two dices', 'throw two dice', 'two dices'],
    action: (i) => {
      talk('' + Math.round(Math.random() * 12));
    },
  },
  // STOP MINUTES
  {
    smart: true,
    indexes: ['stop *-minute', 'start * minute timer', 'start *-minute timer'],
    action: (i, s) => {
      let amount = s.split('').filter((el) => typeof +el == 'number').filter(item => !isNaN(item)).map(Number).filter(e => e);
      talk(`Started an ${amount} minute timer. `);
      console.log("Timer for: " + amount * 1000 * 60);
      setTimeout(() => {
        talk("Tudum, Tudum, the timer is gone!!");
      }, amount * 1000 * 60);
    },
  },
  // JOKE
  {
    indexes: ['tell me a joke', 'tell me joke'],
    action: async () => {
      let res = await fetch('https://icanhazdadjoke.com/slack').then((res) => res.json());
      talk(res.attachments[0].text);
    },
  },
  // DATE
  {
    indexes: ['what day is it', 'what time is it today', "what's the day", "what's the date", "what's the date today"],
    action: (i) => {
      const date = new Date();
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
      let res =
        'Today is ' +
        dayNames[date.getDay()] +
        ' ' +
        date.getDate() +
        ' ' +
        monthNames[date.getMonth()] +
        date.getFullYear();
      talk(res);
    },
  },
  // EXACT TIME
  {
    indexes: ['what time is it', "what's the time", "current time"],
    action: (i) => {
      let d = new Date();
      let h = d.getHours();
      let m = d.getMinutes();
      let res = h + ' ' + m;
      talk(res);
    },
  },
  // CHEER ME UP
  // EXACT TIME
  {
    indexes: ['cheer me up, i\'m feeling down', "cheer me up"],
    action: (i) => {
      const cheerUpResponses = [
        "I'm sorry you're feeling down. How about we play a game? What's your favorite game?",
        "Remember, tough times never last but tough people do!",
        "Things will get better, I promise. In the meantime, how about we listen to some uplifting music?",
        "You're awesome, don't forget that! Why don't we watch a funny video together?",
        "Here's a fun fact: Did you know that laughing can help reduce stress? Let's watch a comedy show!",
        "I'm here for you, always. Want to talk about what's been bothering you?",
        "You got this! Sometimes all it takes is a positive attitude. How about we practice some mindfulness together?",
        "I'm sorry you're feeling down. Maybe some fresh air and a walk outside would help?",
        "Life is tough, but so are you! Let's do something fun, like baking cookies!",
        "You're not alone, I'm here for you. How about we plan a virtual movie night with your friends?"
      ];

      talk(getRandomElement(cheerUpResponses));
    },
  },
];


