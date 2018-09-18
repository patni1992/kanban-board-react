const lists = (state = {}, action) => {
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
