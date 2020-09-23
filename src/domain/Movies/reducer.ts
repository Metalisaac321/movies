import { MOVIES_FETCH_INIT, MoviesAction, DELETE_MOVIE, DeleteMovieAction, SET_DIALOG_STATE, EDIT_MOVIE, ADD_NEW_MOVIE } from './actionTypes';
import { Movie, MoviesState } from './types';

export const homeInitialData: MoviesState = {
  movies: [],
  dialogProps: {
    isOpen: false,
    isEditMovie: false,
    movie: {
      name: '',
      publicationDate: new Date(),
      state: true,
    }
  }
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

    case SET_DIALOG_STATE:
      return {
        ...state,
        dialogProps: { ...action.dialogProps }
      }

    case EDIT_MOVIE:
      return {
        ...state,
        dialogProps: {
          ...state.dialogProps,
          movie: {
            ...state.dialogProps.movie,
            [action.key]: action.value
          }
        }
      }
    case ADD_NEW_MOVIE:
      const movies = [...state.movies];
      const newMovie: Movie = { ...action.movie, movieId: movies[movies.length - 1].movieId + 1 };

      movies.push(newMovie);
      return {
        ...state,
        movies,
      }
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