import { useState } from "react";
import Navigation from "./components/Navigation";
import "./normalize.css";
import "./App.css";
import Order from "./components/Order";
import Hero from "./components/Hero";

import { RootState } from "./state/store";
import { useSelector } from "react-redux";

// TODO: href link to id.

function App() {
  const siteName = "Kiki's Delivery Service";
  // const [clickedLink, setClickedLink] = useState("");
  const [items, setItems] = useState<number[]>([]);
  const [goToId, setGoToId] = useState("");

  const navSubmitHandler = (link: string) => {
    console.log("Clicked", link);
    setGoToId(link);
  };

  const addToCartHandler = (index: number) => {
    console.log("Clicked", index);
    setItems([...items, index]);
    console.log("Indexes", items);
  };

  // Added
  const cart = useSelector((state: RootState) => state.navigation.cart);

  return (
    <>
      <div className="container">
        {/* <Navigation items={items} onSubmit={navSubmitHandler} /> */}
        <Navigation items={cart} onSubmit={navSubmitHandler} />

        <Hero />
        <Order goToId={goToId} onAdd={addToCartHandler} />
      </div>
    </>
  );
}

export default App;
