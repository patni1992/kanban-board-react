import shortid from "shortid";

export function addNewCard(payload) {
  payload.id = shortid.generate();
  payload.color = "blue";
  return {
    type: "ADD_NEW_CARD",
    payload
  };
}
