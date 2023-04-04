import React, { useState} from 'react'
import Api_Fetch from '../Api_Fetch/Api_Fetch';
const Header = () => {
  const [input,setInput]=useState('mubashir05-beep');
  const handleInput=(e)=>{
    let rederedData=e.target.value;
      setInput(rederedData);
  }
  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      <div>{input}</div>
      <Api_Fetch username={input}/>
    </div>
  )
}

export default Header