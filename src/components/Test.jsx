import { useRef, useState } from "react";

export default function Test() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  return (
    <button onClick={handleClick}>
      State: {stateCount} | Ref: {refCount.current}
    </button>
  );

  
  function handleClick() {
    setStateCount(stateCount + 1); // triggers re-render, UI updates
    refCount.current++;            // no re-render, UI stays the same
    console.log(refCount.current); // but value IS changing
  }

}