import React, { useState } from 'react';
import classNames from 'classnames';

import { Button } from './..';

const PizzaItem = ({ name, imageUrl, price, rating, sizes, types }) => {
  const typesArr = ['тонкое', 'традиционное'];
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {typesArr.map((item, i) => (
            <li
              className={classNames({
                active: activeType === i,
                disabled: !types.includes(i),
              })}
              onClick={() => onSelectType(i)}>
              {item}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((item, i) => (
            <li
              className={classNames({
                active: activeSize === i,
              })}
              onClick={() => onSelectSize(i)}>
              {item} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button />
      </div>
    </div>
  );
};

export default PizzaItem;
