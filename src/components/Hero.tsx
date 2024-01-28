import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <>
      <div className="d-flex justify-content-evenly align-items-center mt-4">
        <img src={logo} alt="" />
        <h1 className="fw-bolder heading-large  text-dark-emphasis">
          Kiki's <br /> Delivery <br /> Service
        </h1>
      </div>
    </>
  );
};

export default Hero;
