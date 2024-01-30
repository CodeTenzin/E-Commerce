import logo from "../assets/logo.png";

interface Props {
  siteName: string;
}

const Hero = ({ siteName }: Props) => {
  return (
    <>
      <div className="d-flex justify-content-evenly align-items-center mt-4">
        <img src={logo} alt="" />
        <h1 className="fw-bolder heading-large  text-dark-emphasis site-name">
          {siteName}
        </h1>
      </div>
    </>
  );
};

export default Hero;
