import React, { useState } from 'react';
import './_categories.scss';

const Categories = () => {
  const data = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
  const [selected, setSelected] = useState(0);

  const onSelectItem = (index) => {
    setSelected(index);
  };

  return (
    <div className="categories">
      <ul>
        {data.map((item, i) => (
          <li
            onClick={() => {
              onSelectItem(i);
            }}
            className={`${i === selected ? 'active ' : ''} `}
            key={`${item}${i}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
