import { queryFave } from "../../config/models";

const GET_FAVES_LOADING = "GET_FAVES_LOADING";
const GET_FAVES_SUCCESS = "GET_FAVES_SUCCESS";
const GET_FAVES_ERROR = "GET_FAVES_ERROR";
const TOGGLE_FAVE = "TOGGLE_FAVE";

// ACTION CREATORS - FUNCTIONS THAT RETURN OBJECT
const getFavesLoading = () => ({
  type: GET_FAVES_LOADING
});

const getFaves = faves => ({
  type: GET_FAVES_SUCCESS,
  payload: faves
});

const toggleFave = session_id => ({
  type: TOGGLE_FAVE
});

const getFavesError = error => ({
  type: GET_FAVES_ERROR,
  payload: error
});

export const fetchFaves = () => dispatch => {
  dispatch(getFavesLoading()); // set loading icon before fetching the data
  try {
    dispatch(getFaves(queryFave()));
  } catch (err) {
    dispatch(getScheduleError(err));
  }
};

// REDUCER
export default (
  state = {
    // initial state
    loading: false,
    faves: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_FAVES_LOADING: {
      return {
        ...state,
        loading: true,
        error: "" // if previously there was an error, clear the error
      };
    }
    case GET_FAVES_SUCCESS: {
      return {
        ...state,
        faves: action.payload,
        loading: false,
        error: "" // if previously there was an error, clear the error
      };
    }
    case GET_FAVES_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload // if previously there was an error, clear the error
      };
    }
    default:
      return state;
  }
};
