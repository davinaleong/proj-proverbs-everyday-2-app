import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faBan, faCheck } from "@fortawesome/free-solid-svg-icons"

const ModalComponent = ({
  toggleModal,
  heading,
  children,
  closeClickHandler,
  yesClickHandler,
  noClickHandler,
  cancelClickHandler,
}) => {
  const dataOpenAttr = toggleModal ? `true` : `false`
  const modalButtons = []
  if (yesClickHandler) {
    modalButtons.push(
      <button
        className="btn btn-text btn-text-success"
        onClick={yesClickHandler}
        key="mb-0"
      >
        <FontAwesomeIcon icon={faCheck} /> Yes
      </button>
    )
  }

  if (noClickHandler) {
    modalButtons.push(
      <button
        className="btn btn-text btn-text-danger"
        onClick={noClickHandler}
        key="mb-1"
      >
        <FontAwesomeIcon icon={faTimes} /> No
      </button>
    )
  }

  if (cancelClickHandler) {
    modalButtons.push(
      <button
        className="btn btn-text btn-text-neutral"
        onClick={cancelClickHandler}
        key="mb-2"
      >
        <FontAwesomeIcon icon={faBan} /> Cancel
      </button>
    )
  }

  return (
    <div className="modal" data-open={dataOpenAttr}>
      <div className="modal-dialog">
        <div className="modal-header">
          <h2 className="modal-heading">{heading}</h2>
          <button
            className="btn btn-text btn-text-neutral"
            data-element="close-modal"
            onClick={closeClickHandler}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="modal-body">{children}</div>

        <div
          className="modal-footer"
          style={{ "--grid-col-count": modalButtons.length }}
        >
          {modalButtons}
        </div>
      </div>
    </div>
  )
}

export default ModalComponent
