import {Link} from "react-router-dom"
const Header = () => {
    return (
      
        <header>
        <nav>
            <div className="nav_bar">
                <div>
                <p style={{fontStyle:"'Poppins',italic",fontSize:"30px",color:"black"}} className="logo">TYPING GAME</p>
                </div>
                <div>
                <ul className="list">
                    <li className="list-item"><Link to="/register">Sign-UP</Link></li>
                    <li className="list-item"><Link to="/Login">Login-In</Link></li>
                </ul>
                </div>
            </div>
        </nav>
      </header>
     
    );
}

export default Header;
