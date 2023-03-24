import {useState} from 'react'
import httpClient from '../../../httpClient';
import styles from "./register.module.css";

function Signup() {
  return(
    <div>
      <Navbar />
      <SignupPage />
    </div>
  );
}

function Navbar(){
  const handleClick = () => {
    window.location.href = "/login"
  }
  return(
      <div className={styles.navbar}>
          <div className={styles.navtitle}>
              <h3>Resume Analyser</h3>
          </div>
          <div className={styles.navbuttons}>
              <button style={{marginLeft:"100%"}} onClick={() => handleClick()}>SignIn</button>
          </div>
      </div>
  );
}

function SignupPage() {
    const [fname, setFirstName] = useState();
    const [lname, setLastName] = useState();
    const [email, setEmail] = useState();
    const [mobNo, setPhoneNum] = useState();
    const [password, setPass] = useState();

    const signUpUser = async () => {
      console.log(fname, lname, email, mobNo, password);
      try{
        await httpClient.post("//localhost:5000/register", {fname, lname, email, mobNo, password,});
        window.location.href="/";
      } catch(error){
        if(error.response.status === 401){
          alert("Invalid credintials");
        }
        if(error.response.status === 409){
          alert("User already exist!");
        }
      }
    }
  return (
    <div>
      <div className={styles.center}>
        <div className={styles.center1}>
          <form>
            <div className={styles.loginTitle}>
              <h1>Signup</h1>
            </div>
            <div className={styles.inputField}>
            <input type="text" placeholder="First name" required onChange={(e) => {setFirstName(e.target.value)}}/>
            </div>
            <div className={styles.inputField}>
              <input type="text" placeholder="Last name" required onChange={(e) => {setLastName(e.target.value)}}/>
            </div>
            <div className={styles.inputField}>
              <input type="text" placeholder="Email" required onChange={(e) => {setEmail(e.target.value)}}/>
            </div>
            <div className={styles.inputField}>
              <input type="number" placeholder="Enter mobile no." required onChange={(e) => {setPhoneNum(e.target.value)}}/>
            </div>
            <div className={styles.inputField}>
              <input type="password" placeholder="Enter Password" required onChange={(e) => {setPass(e.target.value)}}/>
            </div>
            <div className={styles.inputField}>
            <button type="button" onClick={() => signUpUser()}>Signup</button>
            </div>
            <div className={styles.loginLink}>
              <label>Already have an account?</label>
              <a href="/login"> Login</a>
            </div>
          </form>
        </div>
        <div className={styles.center2}>
          <div className={styles.loginTitle}></div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
