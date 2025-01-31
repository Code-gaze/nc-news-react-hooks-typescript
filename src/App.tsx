import React, { useState } from "react";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import "./App.css";
import { UserContext } from "./component/store/UserContext";
import UserSelect from "./component/layout/UserSelect";
import { Link, Router } from "@reach/router";
import Navigation from "./component/layout/Navigation";
import NotFound from "./component/error/NotFound";
import Route from "./component/types/route";
import ArticleList from "./component/article/ArticleList";
import UserPage from "./component/user/UserPage";
import ArticlePage from "./component/article/ArticlePage";

const App: React.FC = () => {
  const [user, setUser] = useState("jessjelly");
  const onHandleChange = (
    e: React.ChangeEvent<{
      value: unknown ;
    }>
  ) => setUser(e.target.value as string);

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Header />
        <label>Current Author:</label>
        <UserSelect user={user} handleChange={onHandleChange} />
        <Link to={`/users/${user}`} className="title-link">
          User
        </Link>
        <div className="nav">
          <Navigation />
        </div>
        <div className="body">
          <Router>
            <Route component={ArticleList} path="/" />
            <Route component={ArticleList} path="/topics/:topic" />
            <Route component={UserPage} path="/users/:author" />
            <Route component={ArticlePage} path="/articles/:id" />
            <Route component={NotFound} default />
          </Router>
        </div>
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

export default App;
