import { DATA_LOADED } from "../constants/action-types";

const initialState = {
  posts: []
};

function rootReducer(state = initialState, action: { type: string; payload: any; }) {

  if (action.type === DATA_LOADED) { console.log('action.type:',action.type);
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload)
    });
  }

  return state;

}

export default rootReducer;