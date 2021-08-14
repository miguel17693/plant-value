import { useState } from "react";

function Form({ setPrice, setDailyLE }) {
  const [input, setInput] = useState();
  const submit = (event) => {
    event.preventDefault();
    let inputArray = input.split(" ");
    //We've got the price
    console.log(inputArray[0].replace(/[^0-9.]/g, ''))

    setPrice(inputArray[0].replace(/[^0-9.]/g, ""));
    // and here le per hour
    const [LE,hour] = inputArray[1].split("/");
    setDailyLE(LE/hour*24)
  };
  return (
    <form>
      <textarea
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={submit}>Calculate! </button>
    </form>
  );
}

export default Form;
