import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeExercise } from "../../store/modal.js";
import ExercisePicker from "./ExercisePicker";

Modal.setAppElement(document.getElementById("root"));

const ExerciseModal = ({ exercise, authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const exerciseState = useSelector((state) => state.modal.exerciseShow);

  const closeModal = () => dispatch(closeExercise());

  return (
    <>
      <Modal
        isOpen={exerciseState}
        closeTimeoutMS={200}
        onRequestClose={closeModal}
        contentLabel="Exercise Modal"
        overlayClassName="OuterModalExercise"
        // style={customStyles}
        className="InnerModalExercise"
      >
        <ExercisePicker />
      </Modal>
    </>
  );
};

export default ExerciseModal;
