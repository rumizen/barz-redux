export const lyricsReducer = (
  state = JSON.parse(localStorage.getItem("lyrics")) || [],
  action
) => {
  switch (action.type) {
    case "SET_LYRICS":
      return action.lyrics;
    case "SET_ACTIVE":
      return state.map(lyric => {
        return lyric.id === action.id
          ? { ...lyric, active: true }
          : { ...lyric, active: false };
      });
    case "UPDATE_TITLE":
      return state.map(lyric => {
        if (lyric.active === true) {
          return { ...lyric, title: action.title };
        } else {
          return lyric;
        }
      });
    case "UPDATE_LYRICS":
      return state.map(lyric => {
        if (lyric.active === true) {
          const updatedBars = lyric.bars.map(bar => {
            return bar.id === action.barId
              ? { ...bar, text: action.text }
              : bar;
          });
          return { ...lyric, bars: updatedBars };
        } else {
          return lyric;
        }
      });
    case "ADD_BAR":
      return state.map(lyric => {
        if (lyric.active === true) {
          lyric.bars.push(action.newBar);
          return lyric;
        } else {
          return lyric;
        }
      });
    case "UPDATE_BAR_ACTIVE":
      return state.map(lyric => {
        if (lyric.active === true) {
          const updatedBars = lyric.bars.map(bar => {
            return bar.id === action.barId
              ? { ...bar, active: action.active }
              : bar;
          });
          return { ...lyric, bars: updatedBars };
        } else {
          return lyric;
        }
      });
    case "DELETE_BAR":
      return state.map(lyric => {
        if (lyric.active === true) {
          const updatedBars = lyric.bars.filter(bar => {
            return bar.id !== action.id;
          });
          return updatedBars.length > 0
            ? { ...lyric, bars: updatedBars }
            : { ...lyric, bars: [{ text: "", id: Date.now(), active: true }]};
        } else {
          return lyric;
        }
      });
    case "DELETE_LYRIC":
      return state.filter(lyric => lyric.id !== action.id);
    case "SET_DEFAULT_ACTIVE":
      if (state.length > 0) {
        return state.map((lyric, index, array) => {
          if (index === array.length - 1) {
            return { ...lyric, active: true };
          } else {
            return lyric;
          }
        });
      } else {
        return [
          {
            title: "",
            date: new Date().toLocaleDateString("en-US"),
            id: Date.now(),
            active: true,
            bars: [{ id: Date.now(), text: "" }]
          }
        ];
      }
    default:
      return state;
  }
};
