import {
  faCartPlus,
  faSearch,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  // items: number[];
  items: number;

  onSubmit: (link: string) => void;
}

const Navigation = ({ items, onSubmit }: Props) => {
  const navItems = ["Home", "Order", "Location", "Contact"];

  return (
    <>
      <form className="container sticky d-flex justify-content-between align-items-center  mt-0">
        {navItems.map((navItem, index) => (
          <a
            key={navItem}
            onClick={() => onSubmit(navItem)}
            className="text-secondary text-decoration-none"
            href={`#${navItem[index]}`}
          >
            {navItem}
          </a>
        ))}
        <div>
          <button className="btn btn-outline-primary mx-2">
            <FontAwesomeIcon icon={faCartPlus} />{" "}
            {/* {items.length > 0 && items.length} */}
            {items > 0 && items}
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
