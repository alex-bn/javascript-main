import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    // Guard clause:
    if (!id) return;

    // Load spinner:
    recipeView.renderSpinner();

    // 1) Loading recipe:
    await model.loadRecipe(id);

    // 2) Rendering recipe:
    recipeView.render(model.state.recipe);
    //
  } catch (err) {
    recipeView.renderError();
    Buna;
  }
};

const controlSearchResults = async function () {
  try {
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // Load search results
    await model.loadSearchResults(query);

    // Render results
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

controlSearchResults();

// publisher subscriber pattern:
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();

// API:
// https://forkify-api.herokuapp.com/v2
