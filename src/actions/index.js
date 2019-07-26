export const setActive = id => ({
  type: "SET_ACTIVE",
  id
});

export const updateLyrics = (barId, text) => ({
  type: "UPDATE_LYRICS",
  barId,
  text
});

export const addBar = newBar => ({
  type: "ADD_BAR",
  newBar
});

export const getRhymes = word => ({
  type: "GET_RHYMES",
  word
});

export const setLyrics = lyrics => ({
  type: "SET_LYRICS",
  lyrics
});