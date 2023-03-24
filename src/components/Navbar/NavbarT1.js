import '../../static/NavbarT1.css'

export default function Navbar(){
    const handleClick = () => {
      window.location.href="/register";
    }
    return(
        <div className="navbar">
            <div className="navtitle">
                <h3>Resume Analyser</h3>
            </div>
            <div className="navbuttons">
                <button style={{marginLeft:"90%"}} onClick={() => handleClick()}>SignUp</button>
            </div>
        </div>
    );
  }