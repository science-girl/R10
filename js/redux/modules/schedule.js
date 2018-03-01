const SCHEDULE_URL = "https://r10app-95fea.firebaseio.com/sessions.json";
const GET_SCHEDULE_LOADING = "GET_SCHEDULE_LOADING";
const GET_SCHEDULE_SUCCESS = "GET_SCHEDULE_SUCCESS";
const GET_SCHEDULE_ERROR = "GET_SCHEDULE_ERROR";

// ACTION CREATORS - FUNCTIONS THAT RETURN OBJECT
const getScheduleLoading = () => ({
  type: GET_SCHEDULE_LOADING
});

const getSchedule = data => ({
  type: GET_SCHEDULE_SUCCESS,
  payload: data
});

const getScheduleError = error => ({
  type: GET_SCHEDULE_ERROR,
  payload: error
});

export const fetchSchedule = () => dispatch => {
  dispatch(getScheduleLoading()); // set loading icon before fetching the data

  fetch(SCHEDULE_URL)
    .then(res => res.json())
    .then(data => dispatch(getSchedule(data)))
    .catch(err => dispatch(getScheduleError(err)));
};

// REDUCER
export default (
  state = {
    // initial state
    loading: false,
    data: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_SCHEDULE_LOADING: {
      return {
        ...state,
        loading: true,
        error: "" // if previously there was an error, clear the error
      };
    }
    case GET_SCHEDULE_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "" // if previously there was an error, clear the error
      };
    }
    case GET_SCHEDULE_ERROR: {
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
