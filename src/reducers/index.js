import { combineReducers } from "redux";
import { lyricsReducer } from "./lyricsReducer";
import { rhymesReducer } from "./rhymesReducer";



export const rootReducer = combineReducers({
  lyrics: lyricsReducer,
  rhymes: rhymesReducer
});