import { SHOW_MENU, SET_THEME, DATA_LOADED, API_DATA, PAGE_NUMBER, DISMISS_ITEM, DISMISS_ALL, DETAIL_ITEM } from "../constants/action-types";

const initialState = {
  menu: false,
  theme: 'light',
  posts: [{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
  detail:{
    id:null
  },
  api:{ 
    after:'' 
  },
  page:1
};

function rootReducer(state = initialState, action: { type: string; payload: any; }) {

  if (action.type === SHOW_MENU) {

    return Object.assign({}, state, {
      menu: state.menu ? false : true
    });

  }else if (action.type === SET_THEME) {

    return Object.assign({}, state, {
      theme: action.payload.theme
    });

  }else if (action.type === DATA_LOADED) {

    return Object.assign({}, state, {
      posts: action.payload
    });

  }else if (action.type === API_DATA) {

    return Object.assign({}, state, {
      api:{
        after:action.payload.after,
        prev:action.payload.prev,
      }
    });

  }else if (action.type === PAGE_NUMBER) {

    return Object.assign({}, state, {
      page:action.payload
    });

  }else if (action.type === DISMISS_ITEM) {

    let new_posts = state.posts.filter((post:any)=>{ return post?.data?.id !== action.payload.id });

    return Object.assign({}, state, {
      posts : new_posts
    });

  }else if (action.type === DISMISS_ALL) {
    
    return Object.assign({}, state, {
      posts:action.payload
    });

  }else if (action.type === DETAIL_ITEM) {

    return Object.assign({}, state, {
      detail:{ id:action.payload.id }
    });

  }

  return state;

}

export default rootReducer;