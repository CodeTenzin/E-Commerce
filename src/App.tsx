import { useState } from "react";
import Navigation from "./components/Navigation";
import "./normalize.css";
import "./App.css";
import Order from "./components/Order";
import Hero from "./components/Hero";

import { RootState } from "./state/store";
import { useSelector } from "react-redux";
import Cart from "./components/Cart";

// TODO: href link to id.

function App() {
  const siteName = "Insomnia Cafe";
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
      {/* <div className="container"> */}
      <div className="container-fluid">
        {/* <Navigation items={items} onSubmit={navSubmitHandler} /> */}
        <Navigation items={cart} onSubmit={navSubmitHandler} />
        <Hero siteName={siteName} />
        <Order goToId={goToId} onAdd={addToCartHandler} />
      </div>
    </>
  );
}

export default App;
