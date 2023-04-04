import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles.css'


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
            <div className="name">{data.name}</div>
            <div className="username">{data.login}</div>
            <div className="location">{data.location}</div>
          </div>
          <div className="bottom">
            <div className="public_repo">{data.public_repos}</div>
            <div className="follower">{data.followers}</div>
            <div className="following">{data.following}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api_Fetch;
