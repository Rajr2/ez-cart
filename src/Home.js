import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">

        <div className="home__row">
          <Product
            id="12321341"
            title="Lenovo G780 Smartphone"
            price={350.96}
            rating={5}
            image={process.env.PUBLIC_URL + '/Imgs/Snapdragon.jpg'} alt="logo"
          />
          <Product
            id="49538094"
            title="LG G7 Smartphone"
            price={239.0}
            rating={4}
            image={process.env.PUBLIC_URL + '/Imgs/TCL.jpg'} alt="logo"
          />      
          <Product
            id="4903850"
            title="Amazon e-pod"
            price={199.99}
            rating={3}
            image={process.env.PUBLIC_URL + '/Imgs/e pods.jpg'} alt="logo"
          />
          </div>
        <div className="home__row">
          <Product
            id="23445930"
            title="Lenovo Headphone"
            price={98.99}
            rating={5}
            image={process.env.PUBLIC_URL + '/Imgs/DCE heaphones.jpg'} alt="logo"
          />
          <Product
            id="3254354345"
            title="Phelix Smarwatche"
            price={598.99}
            rating={4}
            image={process.env.PUBLIC_URL + '/Imgs/Phelix Smartwatch.png'} alt="logo"
          />
    
          <Product
            id="90829332"
            title="Razor Cortex Gaming laptop"
            price={1094.98}
            rating={4}
            image={process.env.PUBLIC_URL + '/Imgs/Icompaq.jpg'} alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;