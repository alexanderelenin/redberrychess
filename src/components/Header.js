import "./Header.css";
import logo from "../assets/logo.png";
import landing from "../assets/landing.png";

const Header = (props) => {
  return (
    <div className="main">
      <div className="header">
        <img src={logo} className="logo" />
      </div>
      <div className="landing">{props.children}</div>
    </div>
  );
};

export default Header;
