import React, { useState } from "react";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import "./App.css";
import { UserContext } from "./component/store/UserContext";
import UserSelect from "./component/layout/UserSelect";

const App: React.FC = () => {
  const [user, setUser] = useState("jessjelly");
  const onHandleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setUser(e.target.value);

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Header/>
        <label>Current Author:</label>
        <UserSelect user={user} handleChange={onHandleChange} />
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

export default App;
