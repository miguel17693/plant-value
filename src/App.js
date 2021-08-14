import Form from './components/Form';
import { useState } from 'react';
import Info from './components/Info';
function App() {
  const [price, setPrice] = useState(0);
  const [dailyLE, setDailyLE] = useState(0);

  return (<div>
   <Form setPrice = {setPrice} setDailyLE = {setDailyLE}></Form>
   <Info price ={price} dailyLE={dailyLE}></Info>
   </div>
  );
}

export default App;
