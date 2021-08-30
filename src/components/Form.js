import { useState } from "react";

function Form({ plantsStatus, setPlantsStatus }) {
  const [input, setInput] = useState();
  const submit = (event) => {
    event.preventDefault();
    let arrayPlants= [];
    if (input) {
      console.log(input);

      let inputArray = input.split(" ago");
      inputArray.pop();
      inputArray = inputArray.map((element) => element.trim());
      inputArray.forEach((element) => {
        let arrayPlantas = element.split(" ");
        if (arrayPlantas.length === 23) {
          const id = Number(arrayPlantas[0]);
          const [LE, hour] = arrayPlantas[16].split("/");
          const price = arrayPlantas[19];
          const dailyLe = (LE / hour) * 24;
          const attack =
            arrayPlantas[3] ||
            arrayPlantas[6] ||
            arrayPlantas[9] ||
            arrayPlantas[12];
          const plantStats = { id, dailyLe, price, attack };
          arrayPlants.push(plantStats)
        }
       
      });
      setPlantsStatus(arrayPlants);
    }
  };

  return (
    <form>
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <div>
        <button onClick={submit}>Calcular! </button>
      </div>
    </form>
  );
}

export default Form;
