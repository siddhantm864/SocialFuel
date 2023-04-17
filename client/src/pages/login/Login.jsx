import { useRef, useContext } from "react"
import "./login.css"
import { loginCall } from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext"
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

export default function Login() {
  const email = useRef()
  const password = useRef()
  const { user, isFetching, error, dispatch } = useContext(AuthContext)

  const handleClick = (e) => {
    e.preventDefault()
    console.log(email.current.value, password.current.value)
    loginCall({ email: email.current.value, password: password.current.value }, dispatch)
    console.log(user)
  }
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
            <input placeholder="Email" type="email" required className="loginInput" ref={email} />
            <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password} />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (<CircularProgress color="white" size="20px" />) : ("Log In")}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              <Link to='/register' style={{ textDecoration: "none", color: "white" }}>
                Create a New Account
              </Link>
              {/* {isFetching ? (<CircularProgress color="white" size="20px" />) : ("Create a New Account")} */}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
