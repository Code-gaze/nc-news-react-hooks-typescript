import React, { useState } from "react";
import Header from "./component/layout/Header";
import "./App.css";
import { UserContext } from "./component/store/UserContext";

const App: React.FC = () => {
  const [user, setUser] = useState("jessjelly");

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Header />
      </UserContext.Provider>
    </div>
  );
};

export default App;
