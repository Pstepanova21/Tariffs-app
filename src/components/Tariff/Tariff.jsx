import React from "react";
import "../Tariff/Tariff.css";

const Tariff = ({ title, price, speed, color, isHighlighted, onClick }) => (
  <div
    className={`tariff ${isHighlighted ? "highlighted" : ""}`}
    style={{ borderColor: color }}
    onClick={onClick}
  >
    <div className="tariff-header" style={{ backgroundColor: color }}>
      <h3>{title}</h3>
    </div>
    <div className="tariff-price">
      <span className="price">{price}</span>
      <span className="price-details">руб/мес</span>
    </div>
    <div className="tariff-body">
      <p>до {speed} Мбит/сек</p>
      <p>Объем включенного трафика не ограничен</p>
    </div>
  </div>
);

export default Tariff;
