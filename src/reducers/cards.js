const cards = (state = {}, action) => {
  switch (action.type) {
    case "ADD_NEW_CARD": {
      return { [action.payload.id]: action.payload, ...state };
    }
    case "UPDATE_CARD": {
      return { ...state, [action.payload.id]: action.payload };
    }
    case "DELETE_LIST": {
      const cards  = {...state};
      
      for (const card of action.payload.cards) {
        delete cards[card.id];
      }
      return cards;
    }
    default:
      return state;
  }
};

export default cards;
