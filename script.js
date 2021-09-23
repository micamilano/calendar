let month = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let month30 = [];
let month31 = [];
let month28 = [];
let month30Table = document.getElementById("30Days");
let month31Table = document.getElementById("31Days");
let month28Table = document.getElementById("28Days");

for (let i = 0; i < month.length; i++) {
  if (days[i] == 30) {
    month30.push(month[i]);
  }
  if (days[i] == 28) {
    month28.push(month[i]);
  } else {
    month31.push(month[i]);
  }
}
console.log(month30);
console.log(month31);
console.log(month28);

for (let i = 0; i < month30.length; i++) {
  let item = document.createElement("li");
  let itemContent = document.createTextNode(month30[i]);
  item.appendChild(itemContent);
  month30Table.appendChild(item);
}

for (let i = 0; i < month31.length; i++) {
  let item = document.createElement("li");
  let itemContent = document.createTextNode(month31[i]);
  item.appendChild(itemContent);
  month31Table.appendChild(item);
}

for (let i = 0; i < month28.length; i++) {
  let item = document.createElement("li");
  let itemContent = document.createTextNode(month28[i]);
  item.appendChild(itemContent);
  month28Table.appendChild(item);
}

let btnDark = document.getElementById("darktMode");
let btnLight = document.getElementById("lightMode");
let main = document.getElementById("main");
let header=document.getElementById('header');

function darkMode() {
  document.body.style.backgroundColor = "black";
  main.style.color = "white";
  header.style.backgroundImage='url(https://images.unsplash.com/photo-1607871583590-10131167f88b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'
}

function lightkMode() {
  document.body.style.backgroundColor = "white";
  main.style.color = "black";
  header.style.backgroundImage='url(https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=868&q=80)'
}
