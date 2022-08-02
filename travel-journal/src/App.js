import React from "react";
import Header from "./Header";
import Element from "./Element";
import Data from "./Data";

function App() {

  const menu = Data.map(item => {
    return (
      <Element 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="main-container">
      <div className="header-container">
        <Header />
      </div>
      
      <div className="menu-container">
        {menu}
      </div>
    </div>
  );
}

export default App;
