import React from "react";
import "./homepage.css";

const Homepage = ({ setLoginUser }) => {
  return (
    <div className="homepage">
      <h1>Hello Homepage</h1>
      {/* Changed part */}

      <h2> Enter Your Details </h2>
      <input placeholder="Enter Your Name"> </input>

      {/* Changed part */}
      <div className="button" onClick={() => setLoginUser({})}>
        Logout
      </div>
    </div>
  );
};

export default Homepage;
