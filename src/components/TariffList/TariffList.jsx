import React from "react";
import Tariff from "../Tariff/Tariff";

const TariffList = () => (
  <div className="tariff-list">
    <Tariff title="Безлимитный 300" price="300" speed="10" color="#00bcd4" />
    <Tariff title="Безлимитный 450" price="450" speed="50" color="#4caf50" />
    <Tariff
      title="Безлимитный 550"
      price="550"
      speed="100"
      color="#f44336"
      isHighlighted
    />
    <Tariff title="Безлимитный 1000" price="1000" speed="200" color="#424242" />
  </div>
);

export default TariffList;
