import "./Header.css";
import logo from "../assets/logo.png";
import landing from "../assets/landing.png";

const Header = (props) => {
  return (
    <div className="header">
      <img src={logo} />
      <img src={landing} className="landing" />
    </div>
  );
};

export default Header;
