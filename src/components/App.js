import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
import { useState } from "react";

import "../css/App.css";

import Header from "./Header";
import Footer from "./Footer";
import Amount from './Amount';
import NumberSelectedSection from './NumberSelectedSection'
import DisplaySection from './DisplaySection';
import CashScreen from "../pages/CashScreen";
import whewheContext from "../context/WheWheContext";

const App = () => {

  const [selectedNumber, setNumberSelected] = useState([]);

  const [clear, setClear] = useState(false);

  const [count, setCount] = useState(0);

  const [total, setTotalValue] = useState(0);

  const [border,setBorder] = useState(false);


  return (
    <Router>
      <Switch>
        <whewheContext.Provider value={{ selectedNumber, setNumberSelected, total, setTotalValue, clear, setClear, count, setCount, border,setBorder}}>
          <Route exact path="/">
            <Header />
            <Amount />
            <NumberSelectedSection />
            <DisplaySection />
            <Footer />
          </Route>
          <Route path="/cash-screen">
                <CashScreen/>
          </Route>

        </whewheContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;

