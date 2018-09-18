const initialState = {
  1: {
    id: 1,
    title: "Todo",
    cards: [1, 2]
  },
  2: {
    id: 2,
    title: "In Progress",
    cards: [3]
  }
};
const lists = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default lists;
