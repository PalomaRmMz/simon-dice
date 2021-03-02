const red = document.getElementById("red");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const btnPlay = document.getElementById("btn-play");

// const ULTIMO_NIVEL = 10;
const lefelFinis = 10;

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
    //this.siguienteNivel
    setTimeout(this.nextLevel, 800);
  }

  //inicializar
  init() {
    this.nextLevel = this.nextLevel.bind(this);
    this.selectedSection = this.selectedSection.bind(this);
    $ledText.innerHTML = "Simón dice...";
    $pointText.innerHTML = "1 pt";
    $levelText.innerHTML = "1 lvl";
    this.level = 1;
    console.log("nivel: ", this.level);

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
    // this.subnivel = 0;
    this.subLevel = 0;
    //iluminarSecuencia
    this.selectSection();
    // this.agregarEventosClick();
    this.addEventsClick();
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
  //   transformColorToNumber(color) {
  //   switch (color) {
  transformColorToNumber(section) {
    switch (section) {
      case "red":
        return 0;
      case "blue":
        return 1;
      case "yellow":
        return 2;
      case "green":
        return 3;
    }
  }
  //iluminarSecuencia
  selectSection() {
    for (let i = 0; i < this.level; i++) {
      //let color   = this.transformarNumeroAColor(this.secuencia[i])
      const section = this.transformNumberToColor(this.sequence[i]);

      //iluminarColor(color)
      setTimeout(() => {
        console.log("simon color: " + section);
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
  addEventsClick() {
    //this.colores
    // this.sections.red.addEventListener('click'.this.elegirColor)
    this.sections.red.addEventListener("click", this.selectedSection);
    this.sections.blue.addEventListener("click", this.selectedSection);
    this.sections.yellow.addEventListener("click", this.selectedSection);
    this.sections.green.addEventListener("click", this.selectedSection);
  }
  deleteEventClick() {
    // this.sections.red.addEventListener('click'.this.elegirColor)
    this.sections.red.removeEventListener("click", this.selectedSection);
    this.sections.blue.removeEventListener("click", this.selectedSection);
    this.sections.yellow.removeEventListener("click", this.selectedSection);
    this.sections.green.removeEventListener("click", this.selectedSection);
  }
  //   elegirColor
  selectedSection(ev) {
    const nameColor = ev.target.dataset.color;
    const numberColor = this.transformColorToNumber(nameColor);
    // console.log(this);
    // console.log(ev.target.dataset.color);
    console.log("color user: " + nameColor);
    this.focusSection(nameColor);
    if (numberColor === this.sequence[this.subLevel]) {
      this.subLevel++;
      if (this.subLevel === this.level) {
        this.level++;
        // this.eliminarEventosClick();
        this.deleteEventClick();
        if (this.level === this.lefelFinis + 1) {
          //Gano!
        } else {
          setTimeout(this.nextLevel, 1000);
          // this.nextLevel();
        }
      }
    } else {
      //perdio
    }
  }
}
function playGame() {
  //   let game = new Game();
  window.game = new Game();
  console.log("clicked play");
}
