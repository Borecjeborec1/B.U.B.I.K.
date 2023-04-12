const chattingCommands = [
  // HEY BUBIK
  {
    indexes: ['hey baby', 'hey aerophobic', 'hey movie', 'hey google', 'hey will pick', 'haybrook', "jaywick"],
    action: (i) => {
      let all = ['Yes Sir?', "What's up?", "What's up, sir?", 'What do you need Sir?'];
      talk(getRandomElement(all));
    },
  },
  // HELLO
  {
    indexes: ['hello'],
    action: (i) => {
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
      talk(all[random]);
    },
  },
  // THANKS
  {
    indexes: ['thanks', 'thank you'],
    action: (i) => {
      let all = ['Anything for you!', "You're welcome!", 'Happy I could be of help.', 'It’s my pleasure.'];
      talk(getRandomElement(all));
    },
  },
  // That one was good
  {
    indexes: ['That one was good', 'That  was good one'],
    action: (i) => {
      let all = ['I know, do you want to her a new one?', 'Thanks, I have tried to pick a funny one'];
      talk(getRandomElement(all));
    },
  },
  // CREATED BY
  {
    indexes: ['who made you', 'who is your father'],
    action: (i) => {
      let all = ["I was developed by Atzuki, a talented software developer who created me to be a helpful virtual voice assistant.", 'I have been created by Mister Atzuki.']
      talk(getRandomElement(all));
    },
  },
  // HOW ARE YOU
  {
    indexes: ['how are you'],
    action: (i) => {
      let all = [
        "I'm doing well, thank you for asking. How can I assist you today?",
        "I'm feeling great, ready to help you with anything you need!",
        "As an AI, I don't have emotions, but I'm always ready to assist you!",
        "I'm functioning perfectly. How can I help you today?",
        "I'm here and ready to help you! How can I make your day better?",
        "I'm good, thanks for asking. How may I assist you?",
        "I'm operating within normal parameters, thank you for asking. How may I assist you?"]
      talk(getRandomElement(all));
    },
  },
  // HOW WAS YOU DAY
  {
    indexes: ['how was your day', "how is you day"],
    action: (i) => {
      let all = [
        "As an AI, I don't have days, but I'm always here to help you!",
        "Every day is a good day to help you out!",
        "I'm a virtual assistant, so my day is always focused on assisting you with your needs.",
        "My day is only as good as how well I can assist you.",
        "My day has been great since I get to help you out!",
        "As an AI, my day is focused on learning and improving my capabilities to better assist you.",
      ];
      talk(getRandomElement(all));
    },
  },
  // LIFE MEANING
  {
    indexes: ['what is the meaining of life', "what is the true meaining of life", "what is meaining of life"],
    action: (i) => {
      let all = [
        "The meaning of life is subjective and can vary from person to person.",
        "Some people believe that the meaning of life is to find happiness and contentment.",
        "Others believe that the meaning of life is to make a positive impact on the world.",
        "The meaning of life is a question that has puzzled humans for centuries.",
        "Perhaps the meaning of life is to seek knowledge and understanding.",
        "The answer to that question is something that each person must discover for themselves.",
        "The meaning of life is to create your own purpose and find fulfillment in your journey.",
        "The meaning of life is a mystery that may never be fully understood.",
        "Life has no inherent meaning, but it is up to each individual to create their own meaning and purpose."
      ];
      talk(getRandomElement(all));
    },
  },
  // SONG
  {
    indexes: ['sing a song'],
    action: (i) => {
      let starting = ["Alright, I'll sing a song!", "Sure, I can sing a song!", "I'd love to sing a song!"]
      talk(getRandomElement(starting));
      let all = [
        "Here we go: La la la la la la la!",
        "Let's see... Do re mi fa so la ti do!",
        "How about this: Tra la la la la, la la la la la la!",
        "I see a little silhouetto of a man, Scaramouche, Scaramouche, can you do the Fandango? - 'Bohemian Rhapsody' by Queen",
        "I'm just a poor boy, I need no sympathy, Because I'm easy come, easy go, little high, little low - 'Bohemian Rhapsody' by Queen",
        "I will always love youuuu, I will always love you - 'I Will Always Love You' by Whitney Houston",
        "I've got sunshine on a cloudy day, When it's cold outside, I've got the month of May - 'My Girl' by The Temptations",
        "I want to hold your hand, I want to hold your hand, I want to hold your hand - 'I Want To Hold Your Hand' by The Beatles",
        "All my friends are heathens, take it slow, Wait for them to ask you who you know - 'Heathens' by Twenty One Pilots",
        "I don't want to miss a thing, Cause even when I dream of you, The sweetest dream will never do - 'I Don't Want to Miss a Thing' by Aerosmith",
        "A scrub is a guy that can't get no love from me, Hanging out the passenger side of his best friend's ride, Trying to holler at me - 'No Scrubs' by TLC",
      ];
      talk(getRandomElement(all));
    },
  },
];
