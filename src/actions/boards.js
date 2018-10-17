import shortid from "shortid";

export function addNewBoard(payload) {
  payload.id = shortid.generate();
  payload.lists = [];
  return {
    type: "ADD_NEW_BOARD",
    payload
  };
}

export function moveList(payload) {
 
  return {
    type: "MOVE_LIST",
    payload
  }
}