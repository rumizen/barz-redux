export const lyricsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_LYRICS":
      return action.lyrics;
    case "SET_ACTIVE":
      return state.map(lyric => {
        return lyric.id === action.id
          ? { ...lyric, active: true }
          : { ...lyric, active: false };
      });
    case "UPDATE_LYRICS":
      return state.map(lyric => {
        if (lyric.active === true) {
          return lyric.bars.map(bar => {
            return bar.id === action.barId ? { ...bar, text: action.text } : bar;
          });
        } else {
          return lyric
        };
      });
    case "ADD_BAR":
      return state.map(lyric => {
        if (lyric.active === true) {
          lyric.bars.push(action.newBar);
          return lyric;
        } else {
          return lyric;
        };
      });
    default:
      return state;
  };
};
