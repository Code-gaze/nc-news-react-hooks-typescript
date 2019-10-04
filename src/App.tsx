import React, { useState } from "react";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import "./App.css";
import { UserContext } from "./component/store/UserContext";
import UserSelect from "./component/layout/UserSelect";
import { Link, Router } from '@reach/router';

const App: React.FC = () => {
  const [user, setUser] = useState<string | unknown>("jessjelly");
  const onHandleChange = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown | string;
    }>
  ) => setUser(e.target.value);

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Header />
        <label>Current Author:</label>
        <UserSelect user={user} handleChange={onHandleChange} />
        <Link to={`/users/${user}`} className="title-link">User</Link>
        <div className="nav" ><Navigation /></div>
        {/* <div className="body">
          <Router>
            <ArticleList path="/topics/:topic" />
            <UserPage path="/users/:author" />
            <ArticleList path="/" />
            <ArticlePage path="/articles/:id" />
            <ErrorMsg default />
          </Router>
        </div> */}
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

export default App;
