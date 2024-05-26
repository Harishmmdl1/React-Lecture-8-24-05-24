import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();

  // const {handleSetName} = props;
  const { setUserName } = props;

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const handleUserName = (event) => {
    setUserInfo((prev) => ({
      ...prev,
      username: event.target.value,
    }));
  };
  const handlePassword = (event) => {
    setUserInfo((prev) => ({
      ...prev,
      password: event.target.value,
    }));
  };

  const handlelogin = (event) => {
    event.preventDefault();
    if (userInfo.username == "harish" && userInfo.password === "password") {
      // handleSetName(userInfo.username);                         //use setName
      setUserName(userInfo.username);
      navigate("/home", {
        state: {
          username: userInfo?.username,
          password: userInfo?.password,
        },
      });
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div>
      <h2 className="mt-5"> Hello Welcome to Login Page....</h2>
      <br />
      <br />

      <form className="d-flex justify-content-center">
        <div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter_UserName"
            onChange={handleUserName}
            className="form-control text-center"
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter_Password"
            onChange={handlePassword}
            className="form-control text-center"
          />
          <br />
          <br />
          <button className="btn btn-primary" onClick={handlelogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );

  // const { setUserName } = p;

  // console.log();

  // const navigate = useNavigate();
  // const [userInfo, setUserInfo] = useState({
  //   username: "",
  //   password: "",
  // });

  // const handleUsername = (event) => {
  //   setUserInfo((prev) => ({
  //     ...prev,
  //     username: event.target.value,
  //   }));
  // };

  // const handlePassword = (event) => {
  //   setUserInfo((prev) => ({
  //     ...prev,
  //     password: event.target.value,
  //   }));
  // };

  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   console.log(userInfo);
  //   setUserName(userInfo.username);

  //   navigate("/home", {
  //     state: {
  //       name: userInfo?.username,
  //       pass: userInfo?.password,
  //     },
  //   });
  // };

  // // if (userInfo.username && userInfo.password) {
  // // }

  // return (
  //   <div>
  //     <h2>Login Page</h2>

  //     <div>
  //       <form>
  //         <input
  //           type="text"
  //           placeholder="Enter Username"
  //           id="username"
  //           name="username"
  //           onChange={handleUsername}
  //         />
  //         <br />
  //         <br />
  //         <input
  //           type="password"
  //           placeholder="Enter Password"
  //           id="password"
  //           name="password"
  //           onChange={handlePassword}
  //         />
  //         <br />
  //         <br />
  //         <button onClick={handleLogin}>Login</button>
  //       </form>
  //     </div>
  //   </div>
  // );
}

export default Login;
