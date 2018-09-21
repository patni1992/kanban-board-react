const defaultState = {
  boards: {
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
  },
  cards: {
    "1": { id: "1", title: "sleep", color: "red" },
    "2": { id: "2", title: "# read react book", color: "blue" },
    "3": { id: "3", title: "watch south park", color: "orange" }
  },
  lists: {
    1: {
      id: 1,
      title: "Todo",
      cards: ["1", "2"]
    },
    "2": {
      id: 2,
      title: "In Progress",
      cards: ["3"]
    }
  }
};

export default defaultState;
