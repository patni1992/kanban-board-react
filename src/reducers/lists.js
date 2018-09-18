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
    case "ADD_NEW_CARD": {
      const { listId, id } = action.payload;
      return {
        ...state,
        [listId]: { ...state[listId], cards: [...state[listId].cards, id] }
      };
    }
    default:
      return state;
  }
};

export default lists;
