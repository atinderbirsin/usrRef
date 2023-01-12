import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(({ content, onClickHandler, isOpen }, ref) => {
  const modalRef = useRef(); 
  const hiddenBoxRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            showHiddenBox: () => hiddenBoxRef?.current?.classList.toggle('hidden'),
        }
    },[])


  const handleDocumentClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target))onClickHandler();
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick, true);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  });

  const modal = isOpen && (
    <div>
      <div className="fixed inset-0 border-2 bg-gray-100"></div>
      
      <div ref={hiddenBoxRef} className="fixed inset-80 border-2 bg-red-500 z-50 hidden"></div>

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
