$red = document.getElementById("red");
$blue = document.getElementById("blue");
$yellow = document.getElementById("yellow");
$green = document.getElementById("green");
$btnPlay = document.getElementById("btn-play");

$ledText = document.getElementById("led-text");
$ledText.innerHTML = "--------";
$pointText = document.getElementById("point-text");
$pointText.innerHTML = "--";
$levelText = document.getElementById("level-text");
$levelText.innerHTML = "--";

class Game {
  constructor() {
    this.init();
    this.generateSequence();
  }
  init() {
    $ledText.innerHTML = "Simón dice...";
    $pointText.innerHTML = "1 pt";
    $levelText.innerHTML = "1 lvl";
    this.level = 1;
    this.sections = {
      $red,
      $blue,
      $yellow,
      $green,
    };
  }
  generateSequence() {
    this.sequence = new Array(10)
      .fill(0)
      .map((n) => Math.floor(Math.random(0) * 4));
  }
}
function playGame() {
  //   let game = new Game();
  window.game = new Game();
}
