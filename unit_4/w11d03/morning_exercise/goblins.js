let goblins = []

for (var i = 0; i < 100; i++) {
  goblins.push({value: false})
}


for (var i = 2; i < 5; i++) {
  for (var j = 0; j < goblins.length; j+i) {
    goblins[j].value = !goblins[j].value

  }
}







console.log(goblins);
