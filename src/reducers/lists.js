const lists = (state = {}, action) => {
  switch (action.type) {
    case "ADD_NEW_CARD": {
      const { listId, id } = action.payload;
      return {
        ...state,
        [listId]: { ...state[listId], cards: [...state[listId].cards, id] }
      };
    }
    case "ADD_NEW_LIST": {
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          title: action.payload.title,
          cards: action.payload.cards
        }
      };
    }
    default:
      return state;
  }
};

export default lists;
