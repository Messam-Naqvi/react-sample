import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";
import Signin from "./components/Signin";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This will be called when Signin is successful
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar />
          <HomePage />
        </>
      ) : (
        <Signin onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
};

export default App;
