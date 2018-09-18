const boards = (state = {}, action) => {
  switch (action.type) {
    case "ADD_NEW_BOARD": {
      return { ...state, [action.payload.id]: action.payload };
    }
    case "ADD_NEW_LIST": {
      const { boardId, id } = action.payload;
      return {
        ...state,
        [boardId]: { ...state[boardId], lists: [...state[boardId].lists, id] }
      };
    }
    default:
      return state;
  }
};

export default boards;
