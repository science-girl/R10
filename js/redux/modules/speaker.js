import { formatDataObject } from "../../lib/helpers";
const SPEAKER_URL = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo=`;
const GET_SPEAKER_LOADING = "GET_SPEAKER_LOADING";
const GET_SPEAKER_SUCCESS = "GET_SPEAKER_SUCCESS";
const GET_SPEAKER_ERROR = "GET_SPEAKER_ERROR";

// ACTION CREATORS - FUNCTIONS THAT RETURN OBJECT
const getSpeakerLoading = () => ({
  type: GET_SPEAKER_LOADING
});

const getSpeaker = data => ({
  type: GET_SPEAKER_SUCCESS,
  payload: data
});

const getSpeakerError = error => ({
  type: GET_SPEAKER_ERROR,
  payload: error
});

export const fetchSpeaker = speakerId => dispatch => {
  dispatch(getSpeakerLoading()); // set loading icon before fetching the data

  const speakerUrl = `${SPEAKER_URL}"${speakerId}"`;
  fetch(speakerUrl)
    .then(res => res.json())
    .then(data => dispatch(getSpeaker(formatDataObject(data))))
    .catch(err => dispatch(getSpeakerError(err)));
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
    case GET_SPEAKER_LOADING: {
      return {
        ...state,
        loading: true,
        error: "" // if previously there was an error, clear the error
      };
    }
    case GET_SPEAKER_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "" // if previously there was an error, clear the error
      };
    }
    case GET_SPEAKER_ERROR: {
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
