import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#212529"
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Route exact path="/">
          <TextForm heading="Enter your text here to analyse..." mode={mode} />
        </Route>
        <Route path="/about">
          <About mode={mode} toggleMode={toggleMode}/>
        </Route>
        {/* <Route path="/details" component={Details}></Route>
        <Route path="/orders" component={Orders}></Route> */}
        { /* <Footer />*/}

      </BrowserRouter>
      {/* <Alert alert="This is my alert"/> */}
    </>
  );
}

export default App;
