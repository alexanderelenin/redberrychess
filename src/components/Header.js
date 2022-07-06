import "./Header.css";
import logo from "../assets/logo.png";
import landing from "../assets/landing.png";

const Header = (props) => {
  return (
    <div className={props.className === "chess-header" ? "chess-logo" : "main"}>
      <div className="header">
        <img src={logo} className="logo" />
      </div>
      <div className={props.className}>{props.children}</div>
    </div>
  );
};

export default Header;
