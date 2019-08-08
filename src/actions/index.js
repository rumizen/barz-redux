export const setActive = id => ({
  type: "SET_ACTIVE",
  id
});

export const updateLyrics = (sectionId, barId, text) => ({
  type: "UPDATE_LYRICS",
  barId,
  text,
  sectionId
});

export const deleteLyric = id => ({
  type: "DELETE_LYRIC",
  id
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

export const updateBarActive = (sectionId, barId, active) => ({
  type: "UPDATE_BAR_ACTIVE",
  barId,
  active,
  sectionId
});

export const updateTitle = title => ({
  type: "UPDATE_TITLE",
  title
});

export const deleteBar = (sectionId, id) => ({
  type: "DELETE_BAR",
  id,
  sectionId
});

export const setDefaultActive = () => ({
  type: "SET_DEFAULT_ACTIVE"
});

export const addSection = section => ({
  type: "ADD_SECTION",
  section
});

export const deleteSection = sectionId => ({
  type: "DELETE_SECTION",
  sectionId
});

export const updateSectionTitle = (id, title) => ({
  type: "UPDATE_SECTION_TITLE",
  id,
  title
});