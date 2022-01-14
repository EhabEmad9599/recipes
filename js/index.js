// Selector
let allRecipes = [];
let recipeDetials = {};
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

// Functions

// start get recipes
async function getRecipes(term) {
  let apiResponse = await fetch(
    `https://forkify-api.herokuapp.com/api/search?q=${term}`
  );
  allRecipes = await apiResponse.json();
  allRecipes = allRecipes.recipes;
  displayRecipes();
}
// End get recipes

// Start display recipe

function displayRecipes() {
  let cartoona = ``;

  for (let i = 0; i < allRecipes.length; i++) {
    cartoona += `
    <div class="col-lg-4 col-md-4 col-sm-6">
      <section class="recipes" onclick="getRecipesDetails(${allRecipes[i].recipe_id})">
        <img height="300" class="w-100" src="${allRecipes[i].image_url}" alt="">
        <h4 class="font-weight-bold">${allRecipes[i].title}</h4>
        <p>${allRecipes[i].publisher}</p>
      </section>
    </div>    
    `;
  }
  document.getElementById("recipesRow").innerHTML = cartoona;
}
// End display recipe

// start show recipe details
async function getRecipesDetails(id) {
  let apiResponse = await fetch(
    `https://forkify-api.herokuapp.com/api/get?rId=${id}`
  );
  recipeDetials = await apiResponse.json();
  recipeDetials = recipeDetials.recipe;
  displayRecipesDetails();
}
// End show recipe details

// start display Recipes Detials
function displayRecipesDetails() {
  let cartoona = `<section class="recipeDetails">
    <img class="w-100 mb-2" height="300" src="${recipeDetials.image_url}" alt="">
    <h4>${recipeDetials.title}</h4>
    <ul>`;
  for (let x of recipeDetials.ingredients) {
    cartoona += `<li>${x}</li>`;
  }

  cartoona += `</ul>
  </section>`;

  document.getElementById("recipeDetails").innerHTML = cartoona;
}
// End display Recipes Detials

// Event Listener
searchBtn.addEventListener("click", () => {
  getRecipes(searchInput.value);
});
