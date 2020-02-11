console.log('Hey You are connected')

const data = [
  { name: "Megatron", address: "Cybertron" },
  { name: "Some guy", address: "Some street" },
  { name: "Grace Hopper", address: "Arlington, Virginia" },
  { name: "Ching Shih", address: "The High Seas" },
  { name: "Slimer", address: "The Library" },
  { name: "Umbra", address: "The Void" },
  { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
  { name: "Matt Huntington", address: "Remote" },
  { name: "Ronald McDonald", address: "Casa del McDonalds" },
  { name: "Jem", address: "Starlight Music" }
];


const populateData = (list) => {
  for (let i = 0; i < list.length; i++){
    console.log(list[i])
    const $infoContainer = $('<div>').addClass('infoContainer');
    const $nameDiv = $('<div>').addClass('name').text(list[i].name);
    const $addressDiv = $('<div>').addClass('address').text(list[i].address);
    $infoContainer.append($nameDiv, $addressDiv);
    $('body').append($infoContainer);
  }
}

const addData = ({ address, name }) => {
  data.push({ name: name, address: address });
  $('body').empty();
  populateData(data);
  const $btn = $('<button>').addClass('click-me').text('Click Me Please')
  $btn.on('click', ()=> {addData(ric)})
  $('body').append($btn);
}
const addDataCallback = ({ address, name }, callback) => {
  data.push({ name: name, address: address });
  $('body').empty();
  populateData(data);
  const $btn = $('<button>').addClass('click-me').text('Click Me Please')
  $btn.on('click', callback)
  $('body').append($btn);
}

const ric = {
  name: 'Ric Mershon',
  something: null,
  other: 'other',
  address: 'Cool Mershon Million Dollar Estate',
}

const { name } = ric;

console.log(name)
$(()=> {
  populateData(data);


  // populateData([{name: 'Crsti', address: 'coolest place on earth'}, {name:'Eric', address:'Van meter Mansion'}]);
})
















console.log('end')
