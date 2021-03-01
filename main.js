const red = document.getElementById("red");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const btnPlay = document.getElementById("btn-play");

$ledText = document.getElementById("led-text");
$ledText.innerHTML = "--------";
$pointText = document.getElementById("point-text");
$pointText.innerHTML = "--";
$levelText = document.getElementById("level-text");
$levelText.innerHTML = "--";

class Game {
  constructor() {
    this.init(); //inicializar
    this.generateSequence(); //generarSecuencia
    this.nextLevel(); //siguienteNivel
  }

  //inicializar
  init() {
    $ledText.innerHTML = "Simón dice...";
    $pointText.innerHTML = "1 pt";
    $levelText.innerHTML = "1 lvl";
    this.level = 1;

    //this.colores
    this.sections = {
      red,
      blue,
      yellow,
      green,
    };
  }

  //generarSecuencia
  generateSequence() {
    this.sequence = new Array(10)
      .fill(0)
      .map((n) => Math.floor(Math.random(0) * 4));
  }

  //siguienteNivel
  nextLevel() {
    //iluminarSecuencia
    this.selectSection();
  }

  //transformarNumeroAColor(numero)
  transformNumberToColor(number) {
    switch (number) {
      case 0:
        return "red";
      case 1:
        return "blue";
      case 2:
        return "yellow";
      case 3:
        return "green";
    }
  }

  //iluminarSecuencia
  selectSection() {
    for (let i = 0; i < this.level; i++) {
      //let color   = this.transformarNumeroAColor(this.secuencia[i])
      const section = this.transformNumberToColor(this.sequence[i]);

      //iluminarColor(color)
      setTimeout(() => {
        console.log(section);
        this.focusSection(section);
      }, 1000 * i);
      //    setTimeout(() => this.focusSection(section), 1000 * i)
    }
  }

  //iluminarColor(color)
  focusSection(section) {
    //this.colores(color)
    this.sections[section].classList.add("section-selected");

    //  setTimeout(() = > this.apagarColor(color), 350)
    setTimeout(() => this.quitSelected(section), 350);
  }

  //apagarColor(color)
  quitSelected(section) {
    this.sections[section].classList.remove("section-selected");
  }
}
function playGame() {
  //   let game = new Game();
  window.game = new Game();
}
