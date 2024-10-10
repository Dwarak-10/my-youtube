import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);
  console.log("Reandering...");

  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(
      () => console.log("Namaste React", Math.random() * 10),
      1000
    );
    return () => clearInterval(i.current);
  }, []);

  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          className="m-4 p-2 bg-green-200 rounded-xl"
          onClick={() => {
            x += 1;
            console.log(x);
          }}
        >
          Increase X
        </button>

        <span className="font-bold text-xl">Let :{x}</span>
      </div>
      <div>
        <button
          className="m-4 p-2 bg-green-200 rounded-xl"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>

        <span className="font-bold text-xl">State :{y}</span>
      </div>
      <div>
        <button
          className="m-4 p-2 bg-green-200 rounded-xl"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref =" + ref.current);
          }}
        >
          Increase Z
        </button>

        <span className="font-bold text-xl">Ref :{ref.current}</span>
      </div>
      <button
        className="bg-red-800 p-4 m-2 font-bold text-white"
        onClick={() => clearInterval(i.current)}
      >
        Stop Printing
      </button>
    </div>
  );
};

export default Demo2;
