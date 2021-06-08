import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ItemBlock({
  id,
  name,
  imageUrl,
  brand,
  model,
  price,
  year,
  volume,
  article,
  onClickAddItem,
}) {
  const onAdditem = () => {
    const obj = {
      id,
      name,
      imageUrl,
      brand,
      model,
      price,
      year,
      volume,
      article,
    };
    onClickAddItem(obj);
    setCartStatus(true);
  };
  const [cartStatus, setCartStatus] = useState(false);
  return (
    <div className="item-list__item">
      <div className="item-list__item--img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="item-list__item-wrapper">
        <div className="item-list__item--info default--info fdRow">
          <p className="item-list__item--name">{name}</p>
          <p className="item-list__item--price">
            {price} UAH <span>/ {Math.floor(price / 28)} $</span>
          </p>
        </div>
        <div className="item-list__item--info special--info">
          <p className="item-list__item--descr">
            {brand}, {model}, {year}, {volume}
          </p>
          {cartStatus ? (
            <div className="item-list__item--button">
              <span>В корзині</span>
            </div>
          ) : (
            <div onClick={onAdditem} className="item-list__item--button cursor">
              <span>Купити</span>
            </div>
          )}
        </div>
        <div className="item-list__item--info special--info special--info">
          <p className="item-list__item--article">
            Артикул: <span>{article}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

ItemBlock.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  imageUrl: PropTypes.string,
  brand: PropTypes.string,
  model: PropTypes.string,
  volume: PropTypes.string,
  article: PropTypes.string,
};

ItemBlock.defaultProps = {
  name: '---',
  price: '0',
  brand: '---',
  model: '---',
  volume: '---',
  article: '---',
};

export default ItemBlock;
