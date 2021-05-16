import { DATA_LOADED, API_NEXT, PAGE_NUMBER } from "../constants/action-types";

const initialState = {
  posts: [{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
  api:{ 
    after:'' 
  },
  page:1
};

function rootReducer(state = initialState, action: { type: string; payload: any; }) {

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      posts: action.payload
    });
  }else if (action.type === API_NEXT) {
    return Object.assign({}, state, {
      api:{
        after:action.payload
      }
    });
  }else if (action.type === PAGE_NUMBER) {
    return Object.assign({}, state, {
      page:action.payload
    });
  }

  return state;

}

export default rootReducer;