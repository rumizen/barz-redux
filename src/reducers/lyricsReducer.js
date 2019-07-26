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
          const updatedBars = lyric.bars.map(bar => {
            return bar.id === action.barId ? { ...bar, text: action.text } : bar;
          });
          return { ...lyric, bars: updatedBars };
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
    case "UPDATE_BAR_ACTIVE":
      return state.map(lyric => {
        if (lyric.active === true) {
          const updatedBars = lyric.bars.map(bar => {
            return bar.id === action.barId ? { ...bar, active: action.active } : bar;
          });
          return { ...lyric, bars: updatedBars };
        } else {
          return lyric
        };
      });
    default:
      return state;
  };
};
