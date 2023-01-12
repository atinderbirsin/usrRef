import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Button from "../components/Button";
import Modal from "../components/Modal";

function Homepage() {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputClasses = `outline-none p-3 border `;
  const prevValue = useRef("");
  const renderCount = useRef(0);
    const modalRef = useRef();


  useEffect(() => {
    prevValue.current = value;
    renderCount.current = renderCount.current + 1;
  }, [value]);

  const content = "I am dummy content for modal!...";

  const onClickHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  const btn = <Button primary rounded className='absolute z-50' onClick={() => modalRef.current.showHiddenBox()}>
  Modal Hidden Box
</Button>;

  const btnPortal = createPortal(btn, document.querySelector('#btn'));

  return (
    <div className="h-full flex flex-col items-center justify-center gap-5">
      <input
        type="text"
        className={inputClasses}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <p>
        The current value is {value} & old value was {prevValue.current}
      </p>

      <p>I rendered {renderCount.current} times!</p>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <Modal
        ref={modalRef}
        content={content}
        onClickHandler={onClickHandler}
        isOpen={isOpen}
      />

      <Button primary rounded onClick={() => setIsOpen(!isOpen)}>
        Modal
      </Button>

        {btnPortal}      
    </div>
  );
}

export default Homepage;
