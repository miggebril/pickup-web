import {
  SET_PAGE,
  APPLY_TAG_FILTER,
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  CHANGE_TAB
} from '../constants/actionTypes';

export default function gameList(state = {
    appName: 'Pickup', 
    isAuthenticated: localStorage.getItem('token') ? true : false
  }, action) {
  
  console.log("GameList REDUCER");
  console.log(state);
  console.log(action);

  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        games: action.payload.games,
        gamesCount: action.payload.gamesCount,
        currentPage: action.page
      };
    case APPLY_TAG_FILTER:
      return {
        ...state,
        request: action.request,
        games: action.payload.games,
        gamesCount: action.payload.gamesCount,
        feed: null,
        tag: action.tag,
        currentPage: 0
      };
    case HOME_PAGE_LOADED:
      return {
        ...state,
        request: action.request,
        games: action.payload.games,
        gamesCount: action.payload.gamesCount,
        currentPage: 0,
        feed: action.feed
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case CHANGE_TAB:
      return {
        ...state,
        request: action.request,
        games: action.payload.games,
        gamesCount: action.payload.gamesCount,
        feed: action.feed,
        currentPage: 0
      };
    default:
      return state;
  }
};
