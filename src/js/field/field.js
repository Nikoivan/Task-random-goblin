import imgUrl from "../../img/goblin.png";

class Field {
  constructor() {
    const field = document.createElement("ul");
    field.classList.add("field");
    for (let i = 0; i < 16; i += 1) {
      const cell = document.createElement("li");
      cell.classList.add("cell");
      cell.dataset.id = i;
      cell.appendChild(document.createElement("a"));
      field.appendChild(cell);
    }
    this.field = document.querySelector("body").appendChild(field);
  }

  start() {
    this.intervalId = setInterval(() => {
      this.setGoblin();
    }, 2000);
  }

  addGoblin(id) {
    const target = [...this.field.children].find((el) => +el.dataset.id === id);
    const goblin = document.createElement("img");
    goblin.classList.add("goblin");
    goblin.src = imgUrl;

    target.appendChild(goblin);
  }

  generateId() {
    const oldGoblin = this.field.querySelector(".goblin");
    if (oldGoblin) {
      const oldId = oldGoblin.closest(".cell").dataset.id;
      let positions = [];
      for (let i = 0; i < this.field.children.length; i += 1) {
        positions.push(i);
      }
      positions = positions.filter((el) => el !== oldId);
      return {
        oldGoblin,
        id: positions[Math.floor(Math.random() * positions.length)],
      };
    } else {
      return {
        oldGoblin: null,
        id: Math.floor(Math.random() * this.field.children.length),
      };
    }
  }

  reAddGoblin(oldGoblin, id) {
    const newCell = [...this.field.children].find(
      (el) => +el.dataset.id === id
    );
    const a = newCell.querySelector("a");
    const noGoblin = newCell.replaceChild(oldGoblin, a);
    oldGoblin.closest(".cell").appendChild(noGoblin);
  }

  setGoblin() {
    const { oldGoblin, id } = this.generateId();

    if (oldGoblin) {
      this.reAddGoblin(oldGoblin, id);
    } else {
      this.addGoblin(id);
    }
  }
}

export default Field;
