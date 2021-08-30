import Form from "./components/Form";
import { useState } from "react";
import Info from "./components/Info";
import "./App.css";

function App() {
  const [plantsStatus, setPlantsStatus] = useState([]);

  return (
    <div className="login-page">
      
      <div className="form">
        <Form
          className="register-form"
          plantsStatus={plantsStatus}
          setPlantsStatus={setPlantsStatus}
        ></Form>
      </div>

      {plantsStatus[0] ? (
        <div className="form">
          {" "}
          <Info
            className="register-form"
            plantsStatus= {plantsStatus}
          ></Info >{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
