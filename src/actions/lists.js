import shortid from "shortid";

export function addNewList(payload) {
  payload.id = shortid.generate();
  payload.cards = [];
  return {
    type: "ADD_NEW_LIST",
    payload
  };
}

export function moveCard(payload) {
  return {
    type: "MOVE_CARD",
    payload
  };
}
