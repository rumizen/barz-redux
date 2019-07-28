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

export const updateBarActive = (barId, active) => ({
  type: "UPDATE_BAR_ACTIVE",
  barId,
  active
});

export const updateTitle = title => ({
  type: "UPDATE_TITLE",
  title
});

export const deleteBar = id => ({
  type: "DELETE_BAR",
  id
});