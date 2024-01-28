import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";

interface Props {
  onAdd: (index: number) => void;
}

const Order = ({ onAdd }: Props) => {
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
    "Creampuff",
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

  return (
    <>
      <div className="text-center mt-5">
        {/* <img width={100} height={150} src={image1} alt="" /> */}
        <h2>Order</h2>
        <div className="row row-cols-3">
          {/* <div class="col">Column</div> */}
          {images.map((image, index) => (
            <span key={index} className="col mt-5">
              <img className="menu-image" src={image} />
              <p>{items[index]}</p>
              <p>${prices[index]}</p>
              <button
                className="btn btn-outline-primary px-4"
                onClick={() => onAdd(index)}
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
