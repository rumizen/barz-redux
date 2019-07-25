export const fetchRhymes = async word => {
  const url = `https://api.datamuse.com/words?rel_rhy=${word}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("There was an error getting your rhymes.");
    }
    const words = await response.json();
    return words;
  } catch (error) {
    throw new Error(error.message);
  }
};
