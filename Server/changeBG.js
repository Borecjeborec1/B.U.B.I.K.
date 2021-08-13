async function changeBG() {
  const wallpaper = require('wallpaper');
  const fs = require('fs');
  const request = require('request');

  const download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  };

  let file = await fs.readFileSync(
    'C:/Users/ZISU00/Desktop/Projects/Projects/JavaScript/Backend/desktop/B.U.B.I.K/Server/date.txt',
    'utf8'
  );
  let nd = new Date();
  if (nd.getDate() != file) {
    await download(
      'https://source.unsplash.com/random/?wallpaper',
      'C:/Users/ZISU00/Desktop/Projects/Projects/JavaScript/Backend/desktop/B.U.B.I.K/Server/wallpaper.png',
      async () => {
        await wallpaper.set(
          'C:/Users/ZISU00/Desktop/Projects/Projects/JavaScript/Backend/desktop/B.U.B.I.K/Server/wallpaper.png'
        );
        await wallpaper.get();
        const d = new Date();
        const data = fs.writeFileSync(
          'C:/Users/ZISU00/Desktop/Projects/Projects/JavaScript/Backend/desktop/B.U.B.I.K/Server/date.txt',
          d.getDate().toString()
        );
        return true;
      }
    );
  } else {
    return false;
  }
}

module.exports = changeBG;
