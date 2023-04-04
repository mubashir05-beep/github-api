import React from 'react'
import Navbar from './componets/Navbar/Navbar';
import Data_Container from './componets/Data_Container/Data_Container';
import Api_Fetch from './componets/Api_Fetch/Api_Fetch';
import './App.css'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Data_Container/>
    <Api_Fetch username='mubashir05-beep'/>
    </div>
  )
}

export default App
