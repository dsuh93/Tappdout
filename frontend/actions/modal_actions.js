// imports here

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = ({modal, beerId}) => {
  return {
    type: OPEN_MODAL,
    modal,
    beerId
  }
};

export const closeModal = () => ({
  type: CLOSE_MODAL
})
