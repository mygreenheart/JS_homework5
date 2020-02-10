"use strict";

let gridDiv = document.createElement("div"),
  listDiv = document.createElement("div"),
  showDivHeader = document.createElement("div"),
  searchDivHeader = document.createElement("div"),
  sortDivHeader = document.createElement("div"),
  btnGrid = document.createElement("input"),
  btnList = document.createElement("input"),
  btnFillter = document.createElement("input"),
  pFillter = document.createElement("p"),
  btnSortByName1 = document.createElement("input"),
  btnSortByName2 = document.createElement("input"),
  btnSortByPrice1 = document.createElement("input"),
  btnSortByPrice2 = document.createElement("input"),
  textFillter = document.createElement("input"),
  header = document.createElement("header");

document.body.appendChild(header);
document.body.appendChild(gridDiv);
document.body.appendChild(listDiv);

header.appendChild(showDivHeader);
header.appendChild(searchDivHeader);
header.appendChild(sortDivHeader);


showDivHeader.appendChild(btnGrid);
showDivHeader.appendChild(btnList);
searchDivHeader.appendChild(btnFillter);
searchDivHeader.appendChild(textFillter);
searchDivHeader.appendChild(pFillter);
sortDivHeader.appendChild(btnSortByPrice1);
sortDivHeader.appendChild(btnSortByPrice2);
sortDivHeader.appendChild(btnSortByName1);
sortDivHeader.appendChild(btnSortByName2);



sortDivHeader.className = "sortDiv"
gridDiv.className = "gridDiv";
listDiv.className = "listDiv";
header.className = "header";
btnGrid.type = "button";
btnGrid.value = "Show grid";
btnList.type = "button";
btnList.value = "Show list";
btnFillter.type = "button";
btnFillter.value = "Fillter";
btnSortByName1.type = "button";
btnSortByName1.value = "Sort by Name ↑";
btnSortByName2.type = "button";
btnSortByName2.value = "Sort by Name ↓";
btnSortByPrice1.type = "button";
btnSortByPrice1.value = "Sort by Price ↑";
btnSortByPrice2.type = "button";
btnSortByPrice2.value = "Sort by Price ↓";
textFillter.type = "text";



let pizzaCollections = [];

function addPizzaToCollection(...pizza) {
  pizzaCollections.push(pizza);
}

function createDiv(img, name, composition, calories, price) {
  let secondDiv = document.createElement("div"),
    pImg = document.createElement("img"),
    pName = document.createElement("p"),
    pComposition = document.createElement("p"),
    pCalories = document.createElement("p"),
    pPrice = document.createElement("p");

  secondDiv.className = "grid";
  pImg.src = img;
  pName.innerText = "Name: " + name;
  pComposition.innerText = "Composition: " + composition;
  pCalories.innerText = "Calories: " + calories + " cal";
  pPrice.innerText = "Price: " + price + " $";

  gridDiv.appendChild(secondDiv);
  secondDiv.appendChild(pImg);
  secondDiv.appendChild(pName);
  secondDiv.appendChild(pComposition);
  secondDiv.appendChild(pCalories);
  secondDiv.appendChild(pPrice);
}

function createList(img, name, price) {
  let secondDiv = document.createElement("div"),
    ulLogo = document.createElement("img"),
    ulList = document.createElement("ul"),
    liName = document.createElement("li"),
    liPrice = document.createElement("li");

  secondDiv.className = "list";
  ulLogo.src = img;
  liName.innerText = name;
  liPrice.innerText = price + " $";

  listDiv.appendChild(secondDiv);
  secondDiv.appendChild(ulLogo);
  secondDiv.appendChild(ulList);
  ulList.appendChild(liName);
  ulList.appendChild(liPrice);
}

function drawGridPizza() {
  listDiv.innerHTML = "";
  gridDiv.innerHTML = "";
  for (var i = 0; i < pizzaCollections[0].length; i++) {
    let img = pizzaCollections[0][i].photo,
      name = pizzaCollections[0][i].name,
      composition = pizzaCollections[0][i].showComposition(),
      calories = pizzaCollections[0][i].countCalories(),
      price = pizzaCollections[0][i].price;
    createDiv(img, name, composition, calories, price);
  }
}

function drawListPizza() {
  gridDiv.innerHTML = "";
  listDiv.innerHTML = "";
  for (var i = 0; i < pizzaCollections[0].length; i++) {
    let name = pizzaCollections[0][i].name,
      img = pizzaCollections[0][i].photo,
      price = pizzaCollections[0][i].price;
    createList(img, name, price);
  }
}

function filterByIngredient(name) {
  let filterArr = [];
  gridDiv.innerHTML = "";
  listDiv.innerHTML = "";
  name = textFillter.value;


  pizzaCollections[0].map(e => {
    if (e.composition.has(name)) {
      pFillter.innerText = ""
      filterArr.push(e);
    }
    if (filterArr.length == 0) {
      pFillter.innerText = " Invalid parametrs"
    }
  })



  for (var i = 0; i < filterArr.length; i++) {
    let img = filterArr[i].photo,
      name = filterArr[i].name,
      composition = filterArr[i].showComposition(),
      calories = filterArr[i].countCalories(),
      price = filterArr[i].price;
    createDiv(img, name, composition, calories, price);
  }
}

function sortByName1() {
  let sorted = [];
  gridDiv.innerHTML = "";
  listDiv.innerHTML = "";
  sorted = pizzaCollections[0].slice().sort((a, b) => {
    a.name.toLowerCase();
    b.name.toLowerCase();
    if (a.name < b.name)
      return -1
    if (a.name > b.name)
      return 1

    return 0
  })
  for (var i = 0; i < sorted.length; i++) {
    let name = sorted[i].name,
      img = sorted[i].photo,
      price = sorted[i].price;
    createList(img, name, price);
  }
}
function sortByName2() {
  let sorted = [];
  gridDiv.innerHTML = "";
  listDiv.innerHTML = "";
  sorted = pizzaCollections[0].slice().sort((a, b) => {
    a.name.toLowerCase();
    b.name.toLowerCase();
    if (a.name > b.name)
      return -1
    if (a.name < b.name)
      return 1

    return 0
  })
  for (var i = 0; i < sorted.length; i++) {
    let name = sorted[i].name,
      img = sorted[i].photo,
      price = sorted[i].price;
    createList(img, name, price);
  }
}

function sortByPriceUp() {
  let sorted = [];
  gridDiv.innerHTML = "";
  listDiv.innerHTML = "";
  sorted = pizzaCollections[0].slice().sort((a, b) => {
    return b.price - a.price;
  })
  for (var i = 0; i < sorted.length; i++) {
    let name = sorted[i].name,
      img = sorted[i].photo,
      price = sorted[i].price;
    createList(img, name, price);
  }
}
function sortByPriceDown() {
  let sorted = [];
  gridDiv.innerHTML = "";
  listDiv.innerHTML = "";
  sorted = pizzaCollections[0].slice().sort((a, b) => {
    return a.price - b.price;
  })
  for (var i = 0; i < sorted.length; i++) {
    let name = sorted[i].name,
      img = sorted[i].photo,
      price = sorted[i].price;
    createList(img, name, price);
  }
}


let pizza1 = new Pizza("./img/pizza1.jpg", "Peperoni", 100),
  pizza2 = new Pizza("./img/pizza2.jpg", "Margherita", 2200),
  pizza3 = new Pizza("./img/pizza3.jpg", "Marinara", 300),
  pizza4 = new Pizza("./img/pizza4.jpg", "Quattro Stagioni", 1400),
  pizza5 = new Pizza("./img/pizza5.jpg", "Quattro Formaggi", 5500),
  pizza6 = new Pizza("./img/pizza6.jpg", "Crudo", 3300),
  pizza7 = new Pizza("./img/pizza7.jpg", "Napoletana", 1100),
  pizza8 = new Pizza("./img/pizza8.jpg", "Pugliese", 513),
  pizza9 = new Pizza("./img/pizza9.jpg", "Montanara", 530),
  pizza10 = new Pizza("./img/pizza10.jpg", "Emiliana", 1420),
  pizza11 = new Pizza("./img/pizza11.jpg", "Romana", 1540),
  pizza12 = new Pizza("./img/pizza12.jpg", "Fattoria", 1600),
  pizza13 = new Pizza("./img/pizza13.jpg", "Schiacciata", 550),
  pizza14 = new Pizza("./img/pizza14.jpg", "Prosciutto", 5500),
  pizza15 = new Pizza("./img/pizza15.jpg", "Prosciutto", 5500),
  pizza16 = new Pizza("./img/pizza16.jpg", "Americana", 500);

pizza1.addComposition("bekon", 2000)
pizza1.addComposition("chease", 150)
pizza1.addComposition("salo", 200)
pizza2.addComposition("chease", 500)
pizza2.addComposition("ketchup", 44)
pizza3.addComposition("ketchup", 223)
pizza3.addComposition("otzhika", 451)
pizza4.addComposition("ketchup", 22)
pizza4.addComposition("kolbasa", 2350)
pizza5.addComposition("kotleti", 266)
pizza5.addComposition("goroh", 110)
pizza5.addComposition("pechen treski", 550)
pizza6.addComposition("abrikos", 1000)
pizza6.addComposition("ketchup", 2000)
pizza7.addComposition("bekon", 2000)
pizza7.addComposition("golybzy", 2000)
pizza8.addComposition("bekon", 2000)
pizza8.addComposition("chease", 500)
pizza9.addComposition("chease", 500)
pizza9.addComposition("bekon", 2000)
pizza10.addComposition("chease", 2000)
pizza11.addComposition("ketchup", 2000)
pizza11.addComposition("chease", 500)
pizza12.addComposition("bekon", 2000)
pizza12.addComposition("tomat", 5)
pizza13.addComposition("tomat", 5)
pizza13.addComposition("ketchup", 2000)
pizza14.addComposition("bekon", 2000)
pizza14.addComposition("golybzy", 2000)
pizza15.addComposition("chease", 500)
pizza15.addComposition("bekon", 2000)
pizza15.addComposition("tomat", 5)
pizza15.addComposition("farsh", 2000)
pizza15.addComposition("otzhika", 2000)



addPizzaToCollection(pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7, pizza8, pizza9, pizza10, pizza11, pizza12, pizza13, pizza14, pizza15, pizza16);
btnGrid.addEventListener("click", drawGridPizza);
btnList.addEventListener("click", drawListPizza);
btnFillter.addEventListener("click", filterByIngredient);
btnSortByName1.addEventListener("click", sortByName1);
btnSortByName2.addEventListener("click", sortByName2);
btnSortByPrice1.addEventListener("click", sortByPriceUp);
btnSortByPrice2.addEventListener("click", sortByPriceDown);


