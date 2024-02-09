const background = document.querySelector(".pic");
const audio1 = background.querySelector("audio");

if (audio1) {
  audio1.play();
  //   setTimeout(() => {
  //     audio1.pause();
  //   }, "40000");
} else {
  console.log("non");
}
