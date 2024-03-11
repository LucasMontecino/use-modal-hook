import { useRef, useState } from "react";
import "./use-modal.css";
import useModalHook from ".";

export default function UseModalHookTest() {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef();
  useModalHook(ref, () => setShowModal(false));

  return (
    <div className="my-container">
      {showModal ? (
        <div ref={ref}>
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
