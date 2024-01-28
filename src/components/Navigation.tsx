import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import {
  faCartPlus,
  faCoffee,
  faSearch,
  faShare,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  onSubmit: (link: string) => void;
}

const Navigation = ({ onSubmit }: Props) => {
  const navItems = ["Home", "Menu", "Order Online", "Location", "Contact Us"];

  return (
    <>
      <form className="container d-flex justify-content-between">
        {navItems.map((navItem) => (
          <a
            key={navItem}
            onClick={() => onSubmit(navItem)}
            className="text-secondary text-decoration-none"
            href="#"
          >
            {navItem}
          </a>
        ))}
        <div>
          <button className="btn btn-outline-primary mx-2">
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
          <button className="btn btn-outline-primary mx-2">
            <FontAwesomeIcon icon={faShareAlt} />
          </button>
          <button className="btn btn-outline-primary mx-2">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
    </>
  );
};

export default Navigation;
