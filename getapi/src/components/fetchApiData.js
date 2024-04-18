import React, { useEffect, useState } from "react";
import axios from "axios";

//https://randomuser.me/api

const fetchData = () => {
  return axios
    .get("https://randomuser.me/api")
    .then(({ data }) => {
      //console.log(data.results);
      //return JSON.stringify(data.results, null, 2);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default function FetchApiData() {
  const [randomUserData, setRandomUserData] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setRandomUserData(JSON.stringify(data.results, null, 2));
      setUserData(data.results);
      console.log(userData);
    });
  }, []);

  return (
    <div>
      <div>
        <p> Fetching random API data:</p>
        <pre> {randomUserData}</pre>
        {/* <button
        onClick={() => {
          FetchData();
          console.log("click");
        }}
      >
        Fetch Random API Data
      </button> */}
      </div>

      <div>
        <p>Printing out data</p>
        <ul>
          {userData.map((user) => (
            <div>
              <img src={user.picture.thumbnail}></img>
              <p>
                Full Name: {user.name.first} {user.name.last}
              </p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
