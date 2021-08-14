import { useState } from "react";

function Form({ setPrice, setDailyLE }) {
  const [input, setInput] = useState();
  const submit = (event) => {
    event.preventDefault();
    if (input) {
      console.log(input)
      let inputArray = input.split(" ");
      console.log(inputArray)
      //We've got the price
      console.log(inputArray[0].replace(/[^0-9.]/g, ""));

      setPrice(inputArray[0].replace(/[^0-9.]/g, ""));
      // and here le per hour
      if (inputArray[6]) {
        const [LE, hour] = inputArray[6].split("/");
        setDailyLE((LE / hour) * 24);
      }
    }
  };
  return (
    <form>
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <div>
        <button onClick={submit}>Calculate! </button>
      </div>
    </form>
  );
}

export default Form;
