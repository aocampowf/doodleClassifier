import React from 'react';

export default class ProductCard extends React.Component {
  render() {
    return (
      <div className="ProductCard">
        <div className="ProductCard-imageWrap">
          <img
            src="https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/23626_XXX_v1.tif&wid=2000&cvt=jpeg"
            className="ProductCard-image"
            alt=""
          />
          <span className="ProductCard-flag">New</span>
        </div>
        <div className="ProductCard-content">
          <div className="ProductCard-copy">
            <h3>Product Name</h3>
            <p>by Manufacturer Name</p>
          </div>
          <div className="ProductCard-price">$999.99</div>
        </div>
      </div>
    )
  }
}