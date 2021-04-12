import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeQuestion } from "../../store/modal";
import QuestionRouter from "./QuestionRouter";

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
        overlayClassName="OuterModalQuestion"
        // style={customStyles}
        className="InnerModalQuestion"
      >
        <QuestionRouter />
      </Modal>
    </>
  );
};

export default QuestionModal;
