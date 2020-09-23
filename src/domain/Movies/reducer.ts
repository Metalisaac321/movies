import { MOVIES_FETCH_INIT, MoviesAction, DELETE_MOVIE, DeleteMovieAction } from './actionTypes';
import { MoviesState } from './types';

export const homeInitialData: MoviesState = {
  movies: [],
};

export const moviesReducer = (state: MoviesState = homeInitialData, action: MoviesAction) => {
  switch (action.type) {
    case MOVIES_FETCH_INIT:
      return {
        ...state,
        movies: action.movies
      };
    case DELETE_MOVIE:
      return applyDeleteMovie(state, action);
    default:
      return state;
  }
};

const applyDeleteMovie = (state: MoviesState, { movieId }: DeleteMovieAction) => {
  let movies = [...state.movies];
  movies = movies.filter((movie) => movie.movieId !== movieId);

  return {
    ...state,
    movies,
  }
}

/* function applySetCategories(state: CategoriesState, action: CategoriesFetchSuccessAction) {
  let categories = action.categories.map(
    (category) => ({ ...category, selected: false })
  );
  //console.log('que hay?: ', action.categories)
  // const normalizedCategories = normalize(action.categories, [categorySchema]);

  return {
    ...state,
    data: categories,
  };
}

function applyCategoryToggle(state: CategoriesState, action: CategoriesSelectAction) {
  const categories = state.data;
  const categoryIndex = action.categoryIndex;
  const categorySelected = categories[categoryIndex];
  const toggleCategory = !categorySelected.selected;
  const newCategory = { ...categorySelected, selected: toggleCategory };
  categories[categoryIndex] = newCategory;
  categories[categoryIndex].subcategorias = categories[categoryIndex].subcategorias.map(
    (subcategory) => ({ ...subcategory, selected: toggleCategory })
  );

  return {
    ...state,
    data: categories
  };
}

function applySubcategoryToggle(
  state: CategoriesState,
  { categoryIndex, subcategoryIndex }: SubcategoriesSelectAction
) {
  const categories = state.data;
  const category = categories[categoryIndex]
  const subcategory = category.subcategorias[subcategoryIndex];
  category.subcategorias[subcategoryIndex] = { ...subcategory, selected: !subcategory.selected }

  categories[categoryIndex] = category;

  return {
    ...state,
    date: categories,
  }
}
 */