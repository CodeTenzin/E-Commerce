import { useState } from "react";
import Navigation from "./components/Navigation";
import "./normalize.css";
import "./index.css";
import Order from "./components/Order";
import Hero from "./components/Hero";

function App() {
  const siteName = "Kiki's Delivery Service";
  // const [clickedLink, setClickedLink] = useState("");

  const navSubmitHandler = (link: string) => {
    console.log("Clicked", link);
  };

  const addToCartHandler = (index: number) => {
    console.log("Clicked", index);
  };

  return (
    <>
      <div className="container">
        <Navigation onSubmit={navSubmitHandler} />
        <Hero />
        <Order onAdd={addToCartHandler} />
      </div>
    </>
  );
}

export default App;
