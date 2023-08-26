// import "./axios/global.js";
import "./index.css";
import FirstName from "./components/FirstName";
import SecondName from "./components/SecondName";
import Number from "./components/Number";
import Email from "./components/Email";
import Address from "./components/Address";
import Dropdown from "./components/Dropdown";

// const url = "http://localhost:5000/api/tasks";
const App = () => {
  return (
    <section>
      {/* <div className="container"> */}
      <FirstName />
      <SecondName />
      <Number />
      <Email />
      <Address />
      {/* <Dropdown /> */}
      {/* </div> */}
    </section>
  );
};

export default App;
