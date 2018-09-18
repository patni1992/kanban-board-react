import shortid from "shortid";

export function addNewList(payload) {
  payload.id = shortid.generate();
  payload.cards = [];
  return {
    type: "ADD_NEW_LIST",
    payload
  };
}
