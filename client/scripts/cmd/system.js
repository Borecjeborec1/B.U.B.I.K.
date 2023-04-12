const systemCommands = [
  // OPEN
  {
    smart: true,
    indexes: ["open *"],
    action: (i, s) => {
      let supportedApps = ['brave', 'google', 'chrome', 'blender', 'obsidian', 'vlc', 'godot', 'aseprite', 'lol', 'league of legends', 'tft', 'vscode', 'code', 'discord', 'word', 'ms word', 'excel', 'ms excel', 'powerpoint']
      s = s.toLowerCase().replace(/\.| |\,|\-|\"|\'/g, "").trim()
      if (supportedApps.includes(s)) {
        PEQUENA.open_app(s)
        let all = ["Opening" + s]
        talk(getRandomElement(all));
      } else {
        let all = ["Could not find " + s]
        talk(getRandomElement(all));
      }
    },
  },
];
