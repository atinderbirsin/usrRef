import React, { forwardRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(({ content, onClickHandler, isOpen }, ref) => {
  const modalRef = useRef(); 


  const handleDocumentClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target))
      onClickHandler();
  };

  useEffect(() => {

    ref.current && ref.current.classList.add('!bg-orange-500');

    document.addEventListener("click", handleDocumentClick, true);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  });

  const modal = isOpen && (
    <div ref={ref} >
      <div className="fixed inset-0 border-2 bg-gray-100"></div>

      <div
        ref={modalRef}
        className="fixed inset-40 border-2 z-40 bg-white flex flex-col p-10 justify-between"
      >
        <div>{content}</div>

        <div className="self-end">
          <Button secondary outline rounded onClick={() => onClickHandler()}>
            I Agree!
          </Button>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.querySelector("#modal"));

});

export default Modal;
