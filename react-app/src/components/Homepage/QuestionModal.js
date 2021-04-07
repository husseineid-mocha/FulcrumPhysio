import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeQuestion } from "../../store/modal";
// import SignUpForm from "./SignUpForm";

Modal.setAppElement(document.getElementById("root"));

const QuestionModal = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const questionState = useSelector((state) => state.modal.questionShow);

  const closeModal = () => dispatch(closeQuestion());

  return (
    <>
      <Modal
        isOpen={questionState}
        closeTimeoutMS={200}
        onRequestClose={closeModal}
        contentLabel="Question Modal"
        overlayClassName="OuterModal"
        // style={customStyles}
        className="InnerModal"
      >
        hello
      </Modal>
    </>
  );
};

export default QuestionModal;
