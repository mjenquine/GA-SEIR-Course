// console.log("Stranger things are coming");

document.querySelector("h1").innerText = "Weclome to the Upside Down";

const image = document.querySelector("img");
// console.log(image);

image.style.display = "none";

// continue to make changes
image.style.display = "block";

// change another property
image.style.filter = "grayscale(100%)";

// make sure to use strings for number values
image.style.width = "95%";

// reset a value by setting it to empty string
image.style.filter = "";

// create an element

const eggos = document.createElement("img");
document.querySelector(".container").appendChild(eggos);
eggos.setAttribute(
  "src",
  "https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg"
);

eggos.style.width = "100%";

eggos.remove();

const li = document.querySelectorAll("li");
// console.log(li);

li[0].innerText = "Demo Dog Hangout";
li[4].style.color = "hotpink";
li[3].remove();
