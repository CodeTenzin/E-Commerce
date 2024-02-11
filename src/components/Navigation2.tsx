import logo from "../assets/logo2.png";

const Navigation2 = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src={logo} alt="" className="logo-icon" />
      </div>
      <ul>
        <a href="">
          <li>Menu</li>
        </a>
        <a href="">
          <li>Location</li>
        </a>{" "}
        <a href="">
          <li>About</li>
        </a>{" "}
        <a href="">
          <li>Contact</li>
        </a>
      </ul>
      <button className="btn-login">Login</button>
    </nav>
  );
};

export default Navigation2;
