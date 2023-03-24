import styles from "./Navbar.module.css";
import { userNav } from "../../utils/navItems";
import { useNavigate } from "react-router-dom";
import img from "./60111.jpg";

export default function Navbar({ active, setActive }) {
  const navigate = useNavigate();
  function navigatePage(e) {
    navigate(e);
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.navtitle}>
        <h3>Resume Analyser</h3>
      </div>
      <ul className={styles.navItems}>
        {userNav.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? styles.active : ""}
            >
              {" "}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className={styles.profileBtn}>
        <button onClick={() => navigatePage("/recruter")}>
          Omkar
          <div className={styles.profileIcon}>
            <img alt="" src={img} />
          </div>
        </button>
      </div>
      <div className={styles.logoutBtn}>
        <button onClick={() => navigatePage("/login")}>
          Logout
        </button>
      </div>
    </div>
  );
}
