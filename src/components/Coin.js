import React from "react";
import "../coin.scss";

import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <p>{name}</p>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <div className="coin-data-1">
            <div className="coin-data-1-left">
              <h4>Price</h4>
              <p className="coin-price">${price}</p>
            </div>
            <div className="coin-data-1-right">
              <h4>Volume</h4>
              <p className="coin-volume">${volume.toLocaleString()}</p>
            </div>
          </div>
          <div className="coin-data-2">
            <div className="coin-data-2-left">
              <div className="coin-data-2-left-arrows">
                <span><TiArrowSortedUp /></span>
                <span><TiArrowSortedDown /></span>
              </div>
              <div>
                {priceChange < 0 ? (
                  <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                ) : (
                  <p className="coin-percent green">
                    {priceChange.toFixed(2)}%
                  </p>
                )}
              </div>
            </div>
            <div className="coin-data-2-right">
              <h4>Mkt Cap: </h4>
              <p className="coin-marketcap">${marketcap.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
