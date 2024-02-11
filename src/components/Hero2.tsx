import amazon from "../assets/amazon.png";
import etsy from "../assets/etsy.png";
import langingImg from "../assets/hero-image.png";

const Hero2 = () => {
  return (
    <div className="container hero">
      {/* unused: hero-text */}
      <div className="hero-text">
        <h1 className="hero-heading">
          Curated Collection of Everyday Essentials.
        </h1>
        <p className="hero-description">
          Explore trendy fashion for everyone at SP4DE, your ultimate
          destination for curated styles, top designers, and exceptional
          service.
        </p>
        <div className="btns-flexed">
          <button className="btn btn-primary">Shop Now</button>
          <button className="btn btn-primary">Ad to Cart</button>
        </div>
        <div>
          <p>Available on</p>
          <div className="icons-flexed">
            <a href="#" target="_blank">
              <img src={amazon} alt="" className="logo-icon" />
            </a>
            <a href="#" target="_blank">
              <img src={etsy} alt="" className="logo-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={langingImg} alt="" />
      </div>
    </div>
  );
};

export default Hero2;
