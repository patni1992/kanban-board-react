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

    case "DELETE_LIST": {
      const lists = {
        ...state
      }
      delete lists[action.payload.id]
      return lists
    }

    case "MOVE_CARD": {
      const { source, destination } = action.payload;
      const sourceCards = state[source.id].cards.slice(0);
      const cardId = sourceCards.splice(source.index, 1)[0];

      if (source.id === destination.id) {
        sourceCards.splice(destination.index, 0, cardId);
        return {
          ...state,
          [source.id]: { ...state[source.id], cards: sourceCards }
        };
      }

      const destinationCards = state[destination.id].cards.slice(0);
      destinationCards.splice(destination.index, 0, cardId);

      return {
        ...state,
        [source.id]: { ...state[source.id], cards: sourceCards },
        [destination.id]: { ...state[destination.id], cards: destinationCards }
      };
    }

    default:
      return state;
  }
};

export default lists;
