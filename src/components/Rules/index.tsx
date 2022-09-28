import React from "react"
import Modal from "react-bootstrap/Modal";
import { usePlay } from "../../hooks/usePlay";
import json from "./rules.json";
export const Rules: React.FC = () => {
  const { handleShow, show, handleClose } = usePlay();
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button
        onClick={handleShow}
        className="text-white  button-rules font-barlow m-0 px-4 px-md-1 py-1"
      >
        <h5 className="m-0 mx-5 mx-md-3">R U L E S</h5>
      </button>
      {json.map((image, index) => {
        return (
          <Modal key={index} show={show} onHide={handleClose} className="modal">
            <Modal.Title className="title p-3 d-flex align-items-center justify-content-between">
              <h1 className="m-0">RULES</h1>
              <div
                onClick={handleClose}
                className="button-close d-flex align-items-center"
              >
                <img
                  src={image["close-btn"]}
                  width={30}
                  height={30}
                  alt="close"
                ></img>
              </div>
            </Modal.Title>
            <div className=" d-flex justify-content-center align-items-center p-3 w-100">
              <img
                className="w-100"
                src={image["rules-img"]}
                alt="rock beat scissors, scissors beat drafts, drafts beat rock"
              ></img>
              ;
            </div>
          </Modal>
        );
      })}
    </div>
  );
};
