import { DATA_LOADED } from "../constants/action-types";

const initialState = {
  posts: [{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
};

function rootReducer(state = initialState, action: { type: string; payload: any; }) {

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      posts: action.payload
    });
  }

  return state;

}

export default rootReducer;