export const rhymesReducer = (state = [], action) => {
  switch(action.type) {
    case "GET_RHYMES":
      return action.word;
    default:
      return state;
  };
};