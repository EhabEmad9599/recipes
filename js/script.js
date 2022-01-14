// function getPizza() {
//   let allRecipes = [];
//   let xml = new XMLHttpRequest();

//   xml.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pizza");
//   xml.send();

//   xml.addEventListener("readystatechange", () => {
//     if (xml.readyState == 4 && xml.status == 200) {
//       allRecipes = JSON.parse(xml.response).recipes;
//       console.log('pizza');
//       console.log(allRecipes);
//     }
//   });
// }

// function getSalad(callback) {
//   let allRecipes = [];
//   let xml = new XMLHttpRequest();

//   xml.open("GET", "https://forkify-api.herokuapp.com/api/search?q=Salad");
//   xml.send();

//   xml.addEventListener("readystatechange", () => {
//     if (xml.readyState == 4 && xml.status == 200) {
//       allRecipes = JSON.parse(xml.response).recipes;
//       console.log('Salad');
//       console.log(allRecipes);
//       callback();
//     }
//   });
// }

// function getPasta(callback) {
//   let allRecipes = [];
//   let xml = new XMLHttpRequest();

//   xml.open("GET", "https://forkify-api.herokuapp.com/api/search?q=Pasta");
//   xml.send();

//   xml.addEventListener("readystatechange", () => {
//     if (xml.readyState == 4 && xml.status == 200) {
//       allRecipes = JSON.parse(xml.response).recipes;
//       console.log('Pasta');
//       console.log(allRecipes);
//       callback();
//     }
//   });
// }

// function getBeef(callback) {
//   let allRecipes = [];
//   let xml = new XMLHttpRequest();

//   xml.open("GET", "https://forkify-api.herokuapp.com/api/search?q=Beef");
//   xml.send();

//   xml.addEventListener("readystatechange", () => {
//     if (xml.readyState == 4 && xml.status == 200) {
//       allRecipes = JSON.parse(xml.response).recipes;
//       console.log('Beef');
//       console.log(allRecipes);
//       callback();
//     }
//   });
// }

// getSalad(function(){
//   getBeef(function() {
//     getPasta(function() {
//       getPizza();
//     });
//   });
// });


async function getSalad() {
  let apiResponse = await fetch("https://forkify-api.herokuapp.com/api/search?q=Salad");
  let allRecipes = await apiResponse.json();
  console.log('Salad');
  console.log(allRecipes.recipes);
}

async function getPizza() {
  let apiResponse = await fetch("https://forkify-api.herokuapp.com/api/search?q=Pizza");
  let allRecipes = await apiResponse.json();
  console.log('Pizza');
  console.log(allRecipes.recipes);
}

async function getBeef() {
  let apiResponse = await fetch("https://forkify-api.herokuapp.com/api/search?q=Beef");
  let allRecipes = await apiResponse.json();
  console.log('Beef');
  console.log(allRecipes.recipes);
}


(async function () {
  await getPizza();
  await getSalad();
  await getBeef();
})();
