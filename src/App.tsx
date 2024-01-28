import { useState } from "react";
import Navigation from "./components/Navigation";

function App() {
  const siteName = "Kiki's Delivery Service";
  const [clickedLink, setClickedLink] = useState("");

  const navSubmitHandler = (link: string) => {
    console.log("Clicked", link);
  };

  return (
    <>
      <div className="container text-center">
        <h1>{siteName}</h1>
        <Navigation onSubmit={navSubmitHandler} />
      </div>
    </>
  );
}

export default App;
