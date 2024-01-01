import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useNavigate();

  // const handleClick = async (e) => {
  //   e.prevetnDefault();
  //   if (passwordAgain.current.value !== password.current.value) {
  //     passwordAgain.current.setCustomValidity("Passwords don't match!");
  //   } else {
  //     const user = {
  //       username: username.current.value,
  //       email: email.current.value,
  //       password: password.current.value,
  //     };
  //     try {
  //       const resp = await axios.post("/auth/register", user);
  //       if (resp.data) {
  //         localStorage.setItem("user", resp.data);

  //         history("/login");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };
  const handleClick = async (e) => {
    e.preventDefault(); // Fix the typo here

    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        const resp = await axios.post("http://localhost:8800/api/auth/register", user);
        if (resp.data) {
          localStorage.setItem("user", resp.data);
          history("/login");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MiSocial.</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on MiSocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              autoComplete="on"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
              autoComplete="on"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">
              <Link to='/login' style={{ textDecoration: "none", color: "white" }}>
                Log into Account
              </Link>
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}
