import shortid from "shortid";

export function addNewCard(payload) {
  payload.id = shortid.generate();
  payload.color = "blue";
  return {
    type: "ADD_NEW_CARD",
    payload
  };
}

export function updateCard(payload) {
  return {
    type: "UPDATE_CARD",
    payload
  };
}

export function deleteCard(payload) {
  return {
    type: "DELETE_CARD",
    payload
  };
}

