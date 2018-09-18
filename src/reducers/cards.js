const initialState = {
  1: { id: 1, title: "sleep", color: "red" },
  2: { id: 2, title: "# read react book", color: "blue" },
  3: { id: 3, title: "watch south park", color: "orange" }
};
const cards = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_CARD": {
      return { [action.payload.id]: action.payload, ...state };
    }
    default:
      return state;
  }
};

export default cards;
