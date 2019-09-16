window.addEventListener("keydown", function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return; //Allows repeat clicks before audio file finishes
  audio.currentTime = 0; //Rewind to start
  audio.play();
});
