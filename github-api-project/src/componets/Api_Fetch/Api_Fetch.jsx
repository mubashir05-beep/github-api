import React from "react";
import axios from "axios";
const Api_Fetch = ({ username }) => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        console.log(res);
      })
      .catch((erroe) => console.log("error was found"));
  return <div>

  </div>;
};

export default Api_Fetch;
