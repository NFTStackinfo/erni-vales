import React from "react"
import { Modal } from "./Modal"
import { modalData } from "./data-modal"
import { ModalImg, ModalText } from "./Modal.style"
import { Icon } from "../../UIKit"

export const ModalSeeMore = ({ isActive, toggleModal, company }) => {
  return (
    <Modal isActive={isActive}>
      <ModalImg>
        <img src={modalData[company]?.img} alt={modalData[company]?.alt} />
      </ModalImg>

      <ModalText>
        <div>
          <button>
            <Icon
              name="arrow-down"
              onClick={() => toggleModal()}
              color="black"
            />
          </button>
        </div>

        <h3>About</h3>

        <p>{modalData[company]?.text}</p>
      </ModalText>
    </Modal>
  )
}
