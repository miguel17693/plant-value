import Form from "./components/Form";
import { useState } from "react";
import Info from "./components/Info";
import "./App.css";

function App() {
  const [price, setPrice] = useState(0);
  const [dailyLE, setDailyLE] = useState(0);

  return (
    <div className="login-page">
      <div className="form">
        <Form
          className="register-form"
          setPrice={setPrice}
          setDailyLE={setDailyLE}
        ></Form>
      </div>

      {price ? (
        <div className="form">
          {" "}
          <Info
            className="register-form"
            price={price}
            dailyLE={dailyLE}
          ></Info>{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
