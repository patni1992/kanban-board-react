const defaultState = {
  boards: {
    "10": {
      id: "10",
      title: "React Project",
      color: "blue",
      lists: ["10ie", "1338"]
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
    "1": { id: "1", title: `* hello 
    \n* hello 
    \n* test 
    `, color: "red" },
    "2": { id: "2", title: "# read react book", color: "blue" },
    "3": { id: "3", title: "watch south park", color: "orange" }
  },
  lists: {
    "10ie": {
      id: "10ie",
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
