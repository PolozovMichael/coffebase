import React from "react";
import "./Marketplace.scss";
import marketplaceImg from "../../assets/marketplace.png";
import coffee1 from "../../assets/coffee1.svg";
import rec1 from "../../assets/rectangle1.svg";
import coffee2 from "../../assets/rectangle2.svg";
import coffee3 from "../../assets/rectangle3.svg";
import coffee4 from "../../assets/rectangle4.svg";
import coffee5 from "../../assets/rectangle5.svg";
import coffee6 from "../../assets/rectangle6.svg";
import coffee7 from "../../assets/rectangle7.svg";
import coffee8 from "../../assets/rectangle8.svg";

const Marketplace = () => {
  return (
    <div className="marketplace-hook">
      <img src={marketplaceImg} alt="" />
      <div className="coffees">
        <div className="coffee">
          <img className="coffee-img" src={coffee1} alt="" />
          <img className="" src={rec1} alt="" />
          <h3>Makiatto 0x001e...3</h3>
        </div>
        <div className="coffee">
          <img className="coffee-img" src={coffee2} alt="" />
          <img className="" src={rec1} alt="" />
          <h3>Ice Latte 00123exf...5</h3>
        </div>
        <div className="coffee">
          <img className="coffee-img" src={coffee3} alt="" />
          <img className="" src={rec1} alt="" />
          <h3>Ice Fresco 00444xxx...3</h3>
        </div>
        <div className="coffee">
          <img className="coffee-img" src={coffee4} alt="" />
          <img className="" src={rec1} alt="" />
          <h3>Tea fff444xxx...3</h3>
        </div>
      </div>
      <div className="coffees">
        <div className="coffee">
          <img className="coffee-img" src={coffee5} alt="" />
          <img className="" src={rec1} alt="" />
          <h3>Latte 12313...e13</h3>
        </div>
        <div className="coffee">
          <img className="coffee-img" src={coffee6} alt="" />
          <img className="" src={rec1} alt="" />
          <h3>Cappucino 123a13...e1g</h3>
        </div>
        <div className="coffee">
          <img className="coffee-img" src={coffee7} alt="" />
          <img className="" src={rec1} alt="" />
          <h3>Ice Tea 1dd13a13...fff</h3>
        </div>
        <div className="coffee">
          <img className="coffee-img" src={coffee8} alt="" />
          <img className="" src={rec1} alt="" />
          <h3>Americano 1dd13a13...fff</h3>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
