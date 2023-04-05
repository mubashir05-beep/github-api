import React, { useState } from "react";
import Api_Fetch from "../Api_Fetch/Api_Fetch";
import "./header.css";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const [input, setInput] = useState('mubashir05-beep');

  const handleInput = (value) => {
    if (value.length > 0) {
      fetchData(value);
      setInput([]);
    } else {
      setInput([]);
    }
  };

  const fetchData = (value) => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return user && user.login && user.login.toLowerCase().includes(value);
        });
        setInput(results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="headerContainer">
      <div className="input_field">
        <AiOutlineSearch />
        <input
          type="text"
          onChange={(e) => {
            handleInput(e.target.value);
          }}
          placeholder="Type to search..."
        />
      </div>
     
       <Api_Fetch username={input} /> 
    </div>
  );
};

export default Header;
