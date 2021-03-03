const red = document.getElementById("red"),
  blue = document.getElementById("blue"),
  yellow = document.getElementById("yellow"),
  green = document.getElementById("green"),
  btnPlay = document.getElementById("btn-play");

const levelFinish = 10;

const ledText = document.getElementById("led-text"),
  pointText = document.getElementById("point-text"),
  levelText = document.getElementById("level-text");

ledText.innerHTML = "--------";
pointText.innerHTML = "--";
levelText.innerHTML = "--";

class Game {
  constructor() {
    this.init();
    this.generateSequence();
    setTimeout(this.nextLevel, 800);
  }

  init() {
    this.nextLevel = this.nextLevel.bind(this);
    this.selectedSection = this.selectedSection.bind(this);
    this.level = 1;
    this.point = 1;
    this.sections = {
      red,
      blue,
      yellow,
      green,
    };
    ledText.innerHTML = "Simón dice...";
    pointText.innerHTML = "1 pts";
    levelText.innerHTML = "1 lvl";

    console.log("*Init*\nPuntos: 1\nLevel: 1");
  }

  generateSequence() {
    this.sequence = new Array(10)
      .fill(0)
      .map((n) => Math.floor(Math.random(0) * 4));
  }

  nextLevel() {
    this.subLevel = 0;
    this.selectSection();
    this.addEventsClick();
  }

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

  selectSection() {
    ledText.innerHTML = "Simón dice...";
    pointText.innerHTML = this.point + " pts";
    levelText.innerHTML = this.level + " lvl";

    console.log(
      "* Simon Color *\nPuntos: ",
      this.point,
      "\nLevel: ",
      this.level
    );

    setTimeout(() => {
      ledText.innerHTML = "¡Tu Turno!";
      pointText.innerHTML = this.point + " pts";
      levelText.innerHTML = this.level + " lvl";

      console.log("*¡Tu Turno!*");
    }, 1500);

    for (let i = 0; i < this.level; i++) {
      const section = this.transformNumberToColor(this.sequence[i]);

      setTimeout(() => {
        console.log("simon color: " + section);
        this.focusSection(section);
      }, 1000 * i);
    }
  }

  focusSection(section) {
    this.sections[section].classList.add("section-selected");
    setTimeout(() => this.quitSelected(section), 350);
  }

  quitSelected(section) {
    this.sections[section].classList.remove("section-selected");
  }
  addEventsClick() {
    this.sections.red.addEventListener("click", this.selectedSection);
    this.sections.blue.addEventListener("click", this.selectedSection);
    this.sections.yellow.addEventListener("click", this.selectedSection);
    this.sections.green.addEventListener("click", this.selectedSection);
  }
  deleteEventClick() {
    this.sections.red.removeEventListener("click", this.selectedSection);
    this.sections.blue.removeEventListener("click", this.selectedSection);
    this.sections.yellow.removeEventListener("click", this.selectedSection);
    this.sections.green.removeEventListener("click", this.selectedSection);
  }

  selectedSection(ev) {
    const nameColor = ev.target.dataset.color;
    const numberColor = this.transformColorToNumber(nameColor);
    // console.log("color user: " + nameColor);
    this.focusSection(nameColor);
    if (numberColor === this.sequence[this.subLevel]) {
      this.subLevel++;

      if (this.subLevel === this.level) {
        this.level++;
        this.point++;

        ledText.innerHTML = "¡Perfecto!";
        console.log(
          "¡Perfecto!\n*Verify*\nPuntos: ",
          this.point,
          "\nLevel: ",
          this.level
        );

        this.deleteEventClick();
        if (this.level === this.levelFinish + 1) {
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
