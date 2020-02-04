let kittyTalk = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...']

for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    meow = kittyTalk[Math.floor(Math.random() * kittyTalk.length)]
    console.log(meow);
  } else {
    console.log(i + 'Love me, pet me! HSSSSS!');
  }
}
// with this I get an undefined 20% of the time. I'll reach out to someone for a 1 on 1 in the Am

// meow = kittyTalk[Math.round(Math.random() * kittyTalk.length)]
// console.log(meow);
//above I'm just testing my meow before entering it into the for loop

let turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

for (let element of turtles) {
  console.log(element.toUpperCase());
}
