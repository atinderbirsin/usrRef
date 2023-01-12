import { useEffect, useRef, useState } from "react";

function Homepage() {
  const [value, setValue] = useState('');
  const inputClasses = `outline-none p-3 border `;
  const prevValue = useRef('');
  const renderCount = useRef(0);

  useEffect(() => {
    prevValue.current = value;
    renderCount.current = renderCount.current + 1;
  }, [value])

  return (
    <div className="h-full flex flex-col items-center justify-center gap-5">
      <input
        type="text"
        className={inputClasses}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <p>The current value is {value} & old value was {prevValue.current}</p>

      <p>I rendered { renderCount.current } times!</p>
    </div>
  );
}

export default Homepage;
