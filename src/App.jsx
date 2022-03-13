import React, { useState, useEffect } from 'react';
import './scss/app.scss';
import logoPath from './assets/svg/pizza-logo.svg';
import { Button, Categories, PizzaItem } from './components';

function App() {
  const [data, setData] = useState([
    {
      id: 0,
      imageUrl:
        'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
      name: 'Пепперони Фреш с перцем',
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 803,
      category: 0,
      rating: 4,
    },
    {
      id: 1,
      imageUrl:
        'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg',
      name: 'Сырная',
      types: [0],
      sizes: [26, 40],
      price: 245,
      category: 1,
      rating: 6,
    },
    {
      id: 2,
      imageUrl:
        'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg',
      name: 'Цыпленок барбекю',
      types: [0],
      sizes: [26, 40],
      price: 295,
      category: 1,
      rating: 4,
    },
    {
      id: 3,
      imageUrl:
        'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg',
      name: 'Кисло-сладкий цыпленок',
      types: [1],
      sizes: [26, 30, 40],
      price: 275,
      category: 2,
      rating: 2,
    },
    {
      id: 4,
      imageUrl:
        'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
      name: 'Чизбургер-пицца',
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 415,
      category: 3,
      rating: 8,
    },
    {
      id: 5,
      imageUrl:
        'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg',
      name: 'Крэйзи пепперони',
      types: [0],
      sizes: [30, 40],
      price: 580,
      category: 2,
      rating: 2,
    },
    {
      id: 6,
      imageUrl:
        'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg',
      name: 'Пепперони',
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 675,
      category: 1,
      rating: 9,
    },
    {
      id: 7,
      imageUrl:
        'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg',
      name: 'Маргарита',
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 450,
      category: 4,
      rating: 10,
    },
    {
      id: 8,
      imageUrl:
        'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg',
      name: 'Четыре сезона',
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 395,
      category: 5,
      rating: 10,
    },
    {
      id: 9,
      imageUrl:
        'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg',
      name: 'Овощи и грибы 🌱',
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 285,
      category: 5,
      rating: 7,
    },
  ]);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">
          <div className="container">
            <div className="header__logo">
              <img width="38" src={logoPath} alt="Pizza logo" />
              <div>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
            <div className="header__cart">
              <a href="/cart.html" className="button button--cart">
                <span>520 ₽</span>
                <div className="button__delimiter"></div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>3</span>
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <div className="sort">
                <div className="sort__label">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                      fill="#2C2C2C"
                    />
                  </svg>
                  <b>Сортировка по:</b>
                  <span>популярности</span>
                </div>
                <div className="sort__popup">
                  <ul>
                    <li className="active">популярности</li>
                    <li>цене</li>
                    <li>алфавиту</li>
                  </ul>
                </div>
              </div>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {' '}
              <PizzaItem />
              <PizzaItem />
              <PizzaItem />
              <PizzaItem />
              <PizzaItem />
              <PizzaItem />
              <PizzaItem />
              <PizzaItem />
              <PizzaItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
