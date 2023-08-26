import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { authFetch } from "./axios/global";
export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [countryData, setCountryData] = useState([]);
  const fetching = async () => {
    const response = await authFetch.get("/tasks");
    const response2 = await authFetch.get("/tasks2");

    setFirstName(response.data.taskList[0]);
    setSecondName(response.data.taskList[1]);
    setEmail(response.data.taskList[2]);
    setNumber(response.data.taskList[3]);
    setAddress(response.data.taskList[4]);

    setCountryData(response2.data.taskList_2);
  };
  useEffect(() => {
    fetching();
  }, []);

  return (
    <AppContext.Provider
      value={{ firstName, secondName, address, number, email, countryData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
