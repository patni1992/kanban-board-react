const cards = (state = {}, action) => {
  switch (action.type) {
    case "ADD_NEW_CARD": {
      return { [action.payload.id]: action.payload, ...state };
    }
    default:
      return state;
  }
};

export default cards;
