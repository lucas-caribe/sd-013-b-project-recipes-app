const QUANTIDADE_CARDS = 6;

const getSixCards = (arr) => {
  if (arr !== undefined) {
    const sixCards = arr.slice(0, QUANTIDADE_CARDS);
    return sixCards;
  }
};

export default getSixCards;
