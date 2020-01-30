// const host = {
//   name: 'Roget',
//   occupation: 'creator of Roget\'s Thesaurus',
//   speech () {
//     console.log(`My name is ${host.name}. My occupation is ${host.occupation}`);
//   }
// };
// console.log(host.speech());

const names = [
			       "Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene",
             "Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen",
             "Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"
            ];
const occupations = [
            "Clerical assistant", "Leaflet distributor", "Landowner",
            "Special constable", "Anaesthetist", "Park-keeper", "Butler",
            "Choreographer", "Blacksmith", "Chef", "Legal secretary",
            "Song writer", "Librarian", "Landscape gardener"

class BasicHost {
  constructor (name, occupation) {
    this.name = name
    this.occupation = occupation
    }
  saySpecs() {
    console.log(`My name is ${this.name}. My occupation is ${this.occupation}.`);
  }
}

let host1 = new BasicHost('Roget', 'creator of Roget\'s Thesaurus')
let host2 = new BasicHost('Claire', 'maker of blades')
host1.saySpecs()
host2.saySpecs()
