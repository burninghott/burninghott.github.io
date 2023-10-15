import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ coin }) => {
  return (
    <div className="home-coin">
      <Link to={`/${coin.id}`}>
        <span className="home-coin-image">
          <img src={coin.image} alt="" />
        </span>
        <span className="home-coin-name">{coin.name}</span>
        {coin.priceBtc && (
          <span className="home-coin-prices">
            <span className="home-coin-btc">
              <img src="/bitcoin.webp" alt="" />
              {coin.priceBtc} BTC
            </span>
            <span className="home-coin-usd">({coin.priceUsd} USD)</span>
          </span>
        )}
      </Link>
    </div>
  );
};

export default ListItem;
