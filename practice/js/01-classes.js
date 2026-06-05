class Cricketer {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.matchPlayed = 0;
    this.stamina = 100;
  }

  introduce() {
    return `${this.name} the ${this.role} | Match Played: ${this.matchPlayed} | Stamina: ${this.stamina}`;
  }
}

const player1 = new Cricketer("Rohit Sharma", "batsman"); // player1 or player2 ke pass this ka alg alg context h but ye cricketer ke saare method memory m share ho rhe h |
const player2 = new Cricketer("Jasprit Bumrah", "bowler");

// console.log(`Player2: ${player2.introduce()}`);
// console.log(`Player1: ${player1.introduce()}`);

console.log("typeOf class:", typeof Cricketer);
console.log(player1.hasOwnProperty("name"));

class Debutant {
  constructor(name) {
    this.name = name;
    this.walkOut = () => `${this.name} walks out to bat for the first time`;
  }
}

const debutant1 = new Debutant("Shubman Gill");
const someThingFromLastClass = debutant1.walkOut;

console.log(someThingFromLastClass());
