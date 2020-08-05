import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import "./Assets/avenirnextcyr-medium.css";
import {Auth} from "./Auth/Auth";
import {Registration} from "./Auth/Registration";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Router>
        <Switch>
          {
            isAuth? "" :
              <>
                <Route exact path="/">
                  <Auth/>
                </Route>
                <Route exact path="/registration">
                  <Registration/>
                </Route>
              </>
          }

          <Route>" "</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
