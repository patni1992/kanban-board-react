const defaultState = {
  boards: {
    "10": {
      id: "10",
      title: "study",
      color: "red",
      lists: ["1337", "1338"]
    },
    "11": {
      id: "11",
      title: "Code react",
      color: "orange",
      lists: []
    },
    "12": {
      id: "12",
      title: "Dev stuff",
      color: "blue",
      lists: []
    }
  },
  cards: {
    "1": { id: "1", title: "sleep", color: "red" },
    "2": { id: "2", title: "# read react book", color: "blue" },
    "3": { id: "3", title: "watch south park", color: "orange" }
  },
  lists: {
    "1337": {
      id: "1337",
      title: "Todo",
      cards: ["1", "2"]
    },
    "1338": {
      id: "1338",
      title: "In Progress",
      cards: ["3"]
    }
  }
};

export default defaultState;
