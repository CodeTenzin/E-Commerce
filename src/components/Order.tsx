import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";

// Added
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { increment, decrement } from "../state/NavigationSlice";

interface Props {
  goToId: string;
  onAdd: (index: number) => void;
}

const Order = ({ goToId, onAdd }: Props) => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  const items = [
    "Macaron",
    "Chocolate Cake",
    "Glazed Donut",
    "Creme Brulee",
    "Cappuccino",
    "Iced Americano",
    "Latte",
    "Strawberry Ice Cream",
    "Vanilla Ice Cream",
  ];

  const prices = [5.49, 4.99, 3.99, 6.49, 3.49, 4.29, 3.49, 2.99, 2.99];

  // Added
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div id={goToId} className="container text-center mt-5">
        <h2 className="order">Order</h2>
        <div className="row justify-content-center align-items-center row-cols-4">
          {images.map((image, index) => (
            <span key={index} className="order-items rounded col mx-3 mt-5 p-3">
              <img className="menu-image mb-3" src={image} />
              <p className="border border-secondary-subtle rounded-pill fw-medium">
                {items[index]}
              </p>
              <p className="fw-lighter">${prices[index]}</p>
              {/* <button
                className="btn btn-outline-primary px-4"
                onClick={() => onAdd(index)}
              >
                Add
              </button> */}
              <button
                className="btn btn-outline-primary px-4"
                onClick={() => dispatch(increment())}
              >
                Add
              </button>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Order;
