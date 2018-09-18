const initialState = {
  1: {
    id: 1,
    title: "study",
    color: "red",
    lists: [1, 2]
  },
  2: {
    id: 2,
    title: "test",
    color: "orange",
    lists: []
  },
  3: {
    id: 3,
    title: "Dev stuff",
    color: "blue",
    lists: []
  },
  4: {
    id: 4,
    title: "Youtube channel",
    color: "green",
    lists: []
  },
  5: {
    id: 5,
    title: "Other",
    color: "red",
    lists: []
  }
};
const boards = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_BOARD": {
      return { ...state, [action.payload.id]: action.payload };
    }
    default:
      return state;
  }
};

export default boards;
