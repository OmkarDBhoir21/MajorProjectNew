import { useState } from "react";
import httpClient from "../../../httpClient";
import styles from "./login.module.css";

function Login() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}

function Navbar(){
  const handleClick = () => {
    window.location.href = "/register"
  }
  return(
      <div className={styles.navbar}>
          <div className={styles.navtitle}>
              <h3>Resume Analyser</h3>
          </div>
          {/* <div className={styles.navbuttons}>
              <button style={{marginLeft:"50%"}} onClick={() => handleClick()}>SignUp</button>
          </div> */}
      </div>
  );
}

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const loginuser = async () => {
    console.log(email, password);

    try {
      await httpClient.post("//localhost:5000/login", { email, password });
      window.location.href = "/";
    } catch (error) {
      if (error.response.status === 401) {
        alert("Invalid credintials");
      }
    }
  };
  return (
    <div>
      <Navbar />
      <div className={styles.center}>
        <div className={styles.center1}>
          <form>
            <div className={styles.loginTitle}>
              <h1>Login</h1>
            </div>
            <div className={styles.inputField}>
              <input type="text" placeholder="Email" required onChange={(e) => {setEmail(e.target.value)}}/>
            </div>
            <div className={styles.inputField}>
              <input type="password" placeholder="Password" required onChange={(e) => {setPass(e.target.value)}}/>
            </div>
            <div className={styles.fp}>
              <a href=" ">forget password?</a>
            </div>
            <div className={styles.inputField}>
            <button type="button" onClick={() => loginuser()}>Login</button>
            </div>
            <div className={styles.signupLink}>
              <p>Don't have an account?<a href="/register"> Signup</a></p>
            </div>
          </form>
        </div>
        <div className={styles.center2}>
        </div>
      </div>
    </div>
  );
}

export default Login;