import { useState } from "react";
import "./use-modal.css";

export default function UseModalHookTest() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className="my-container"
      onClick={showModal && (() => setShowModal(false))}
    >
      {showModal ? (
        <div>
          <h1>I am the modal to TEST</h1>
          <p>
            If you want to close this modal don&apos;t click here, click
            outside!
          </p>
        </div>
      ) : (
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      )}
    </div>
  );
}
