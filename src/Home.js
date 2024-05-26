import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Home = ({ username }) => {
  const navigate = useNavigate();

  return username ? (
    <div>
      <h2 className="mt-5" > Hello {username} Welcome to Home Page....🏠</h2>
    </div>
  ) : (
    // navigate("/")
    <Navigate to="/"/>
  );




















  // const location = useLocation();

  // // const username = location?.state?.name;
  // // const password = location?.state?.password;
  // // console.log(location);

  // return (
  //   username ?
  //   <div>
  //     <h2>Welcome Home.. {username}</h2>
  //   </div>
  //   : <Navigate to="/" />
  // );
}

export default Home;
