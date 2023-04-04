import React, { createContext} from "react";
import Navbar from "./componets/Navbar/Navbar";
import Data_Container from "./componets/Data_Container/Data_Container";
import Api_Fetch from "./componets/Api_Fetch/Api_Fetch";
import Header from './componets/Header/Header';
import "./App.css";

export const MainContext = createContext(null);
function App() {


  return (
    <div className="App">
      <Header/>
      {/* <Header/> Will return username entered from user */}
      {/* context will then forward the user name to api forward and thenm will make container there */}
      {/* <MainContext.Provider>
      <Api_Fetch username="mubashir05-beep" />
      </MainContext.Provider>
       */}
    </div>
  );
}

export default App;