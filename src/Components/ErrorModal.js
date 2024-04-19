import React from "react";
import Modal from "react-modal";
import Lottie from 'react-lottie';
import animationData from '../lottiAnimations/usernotfound.json';

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  content: {
    top: "50%",
    left: "50%",
    width: "50%",
    innerHeight: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    border: "none",
    backgroundColor: "#ffffff",
    textAlign: "center",
  },
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function ErrorModal({ isOpen, errorMessage, onClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles} ariaHideApp={false}>
      <h1 style={{ color: "red" }}>Somthing went Wrong!!!</h1>
      <Lottie options={defaultOptions} height={150} width={150} />
      <h2>{errorMessage}</h2>
      <button className="btn btn-danger" onClick={onClose}>Try Again</button>
    </Modal>
  );
}

export default ErrorModal;
