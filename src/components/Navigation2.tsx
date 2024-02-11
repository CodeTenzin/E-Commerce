import logo from "../assets/logo2.png";

const Navigation2 = () => {
  return (
    <nav className="container">
      <img src={logo} alt="" className="logo-icon" />
      <ul>
        <a href="" className="link link-primary">
          <li>Menu</li>
        </a>
        <a href="" className="link link-primary">
          <li>Location</li>
        </a>{" "}
        <a href="" className="link link-primary">
          <li>About</li>
        </a>{" "}
        <a href="" className="link link-primary">
          <li>Contact</li>
        </a>
      </ul>
      <button className="btn btn-primary">Login</button>
    </nav>
  );
};

export default Navigation2;
