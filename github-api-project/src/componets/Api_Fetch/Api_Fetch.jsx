import React, { useEffect, useState } from "react";
import axios from "axios";
const Api_Fetch = ({ username }) => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(`Error ${error}`));
  }, [username]);

  return (
    <div className="contianer">
      <img src={data.avatar_url} alt="" srcset="" />
      <div>
        <div className="leftContainer">
          <div className="top">
            <div className="name"></div>
            <div className="username"></div>
            <div className="location"></div>
          </div>
          <div className="bottom">
            <div className="public_repo"></div>
            <div className="follower"></div>
            <div className="following"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api_Fetch;
