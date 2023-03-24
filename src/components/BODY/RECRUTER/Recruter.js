import styles from './recruter.module.css'
import img from "../../static/businessman-character-avatar-isolated/60111.jpg";
import { useNavigate } from 'react-router-dom';

export default function Recurter(){
    return(
        <div>
            <Navbar />
        </div>
    );
}


function Navbar() {
    const navigate = useNavigate();
    function navigatePage(e) {
      navigate(e);
    }
    return (
      <div className={styles.navbar}>
        <div className={styles.navtitle}>
          <h3>Resume Analyser</h3>
        </div>
        <div className={styles.navLink}>
          <a href="/recruter">Home</a>
          <a href="/login">History</a>
          <a href="/login">Applied Candidates</a>
          <div className={styles.profileBtn}>
            <button onClick={() => navigatePage("/user")}>
              Omkar
              <div className={styles.profileIcon}>
                <img alt="" src={img} />
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }


function RecurterPage() {

    return(
        <div>

        </div>
    );
}