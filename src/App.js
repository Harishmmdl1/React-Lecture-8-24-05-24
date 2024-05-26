import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import SignUp from "./SignUp";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState } from "react";

const App = () => {

  const [username, setUserName] = useState(null);

  // const handleSetName = (username) => {
  //   setUserName(username);
  // }


  return (
    <div className="container text-center">
      <h1> App </h1>

      <BrowserRouter>
        <ul className="list-unstyled d-flex justify-content-center gap-5 fs-4 mt-5">
          <li>
            <Link className="text-decoration-none" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/career">
              Career
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/signUp">
              SignUp
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/login">
              Login
            </Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login setUserName={setUserName}/>} />
          {/* <Route path="/login" element={<Login handleSetName={handleSetName}/>} /> */}
          <Route path="/home" element={<Home username={username}/>} />
          <Route path="/career" element={<Career username={username} />} />
          <Route path="/about" element={<About username={username} />} />
          <Route path="/contact" element={<Contact username={username} />} />
          <Route path="/signUp" element={<SignUp username={username} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
        <ul className="list-unstyled d-flex justify-content-center gap-5 fs-4">
          <li>
            <Link className="text-decoration-none" to="/home">Home</Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/about">About</Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/career">Career</Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/signUp">SignUp</Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/">Login</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Login setUserName={setUserName}/>} />
          <Route path="/home" element={<Home username={username} />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
