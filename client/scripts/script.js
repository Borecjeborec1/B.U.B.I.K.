import { allCommands } from "./cmd/all.js";

artyom.addCommands(allCommands);

function startContinuousArtyom() {
  artyom.restart()
  setTimeout(() => {
    artyom.initialize({
      lang: "en-GB",
      continuous: true,
      soundex: true,
      listen: true,
      debug: true,
      speed: .95
    }).then(() => {
      console.log("Ready to work !");
    })
  }, 250);
}
//All catchable artyom errors will be catched with this
artyom.when("ERROR", function (error) {

  if (error.code == "network") {
    alert("An error ocurred, artyom cannot work without internet connection !");
  }

  if (error.code == "audio-capture") {
    alert("An error ocurred, artyom cannot work without a microphone");
  }

  if (error.code == "not-allowed") {
    alert("An error ocurred, it seems the access to your microphone is denied");
  }

  console.log(error.message);
});
document.addEventListener("click", e => {
  startContinuousArtyom()
}, { once: true })

