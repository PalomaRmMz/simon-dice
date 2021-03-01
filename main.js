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
  }
  init() {
    $ledText.innerHTML = "Simón dice...";
    $pointText.innerHTML = "1 pt";
    $levelText.innerHTML = "1 lvl";
  }
}
function playGame() {
  let game = new Game();
}
