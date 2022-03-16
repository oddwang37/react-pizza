import React from 'react';
import { Categories, PizzaItem, Sort } from './../components';

const Home = ({ data }) => {
  console.log(data);
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort
            items={[
              { name: 'популярности', type: 'popular' },
              { name: 'цене', type: 'price' },
              { name: 'алфавиту', type: 'alphabet' },
            ]}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {' '}
          {data.map((obj) => (
            <PizzaItem key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
