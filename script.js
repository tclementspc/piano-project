/* to use the keyboard keys as a piano */
const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
const BLACK_KEYS = ["a", "s", "d", "f", "g", "h", "j"];

const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

keys.forEach((key) => {
  key.addEventListener("click", () => playNote(key));
});

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  /*the above line of code will keep the note sound from messing up if youn hold the key down for a period */
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  /*the above will stop the audio file abruptly so you can start the sound from the beginning and play the note repeatedly faster */
  noteAudio.play();
  key.classList.add("active");
  /* when key is pressed the key color will change */
  noteAudio.addEventListener("ended", () => {
    key.classList.remove("active");
    /*when the key sound is over, the key color will return to the origihnal color */
  });
}
