const boards = (state = {}, action) => {
  switch (action.type) {
    case "ADD_NEW_BOARD": {
      return { ...state, [action.payload.id]: action.payload };
    }
    default:
      return state;
  }
};

export default boards;
