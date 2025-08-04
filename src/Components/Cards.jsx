import React from 'react'
import { im1, im2, im3 } from '../assets/Assets';

function Cards() {
  const cards = [
    {
      image: im1,
      name: "Lucky 6"
    },
    {
      image: im2,
      name: "Beach Roulette"
    },
    {
      image: im3,
      name: "Teenpatti Joker 20-20"
    },
    {
        image: im1,
        name: "Lucky 6"
      },
      {
        image: im2,
        name: "Beach Roulette"
      },
      {
        image: im3,
        name: "Teenpatti Joker 20-20"
      },
      {
        image: im1,
        name: "Lucky 6"
      },
      {
        image: im2,
        name: "Beach Roulette"
      },
      {
        image: im3,
        name: "Teenpatti Joker 20-20"
      },
      {
        image: im1,
        name: "Lucky 6"
      },
      {
        image: im2,
        name: "Beach Roulette"
      },
      {
        image: im3,
        name: "Teenpatti Joker 20-20"
      },
      {
        image: im1,
        name: "Lucky 6"
      },
      {
        image: im2,
        name: "Beach Roulette"
      },
      {
        image: im3,
        name: "Teenpatti Joker 20-20"
      },
      {
        image: im1,
        name: "Lucky 6"
      },
      {
        image: im2,
        name: "Beach Roulette"
      },
      {
        image: im3,
        name: "Teenpatti Joker 20-20"
      },
      {
        image: im1,
        name: "Lucky 6"
      },
      {
        image: im2,
        name: "Beach Roulette"
      },
      {
        image: im3,
        name: "Teenpatti Joker 20-20"
      },
      {
        image: im1,
        name: "Lucky 6"
      },
      {
        image: im2,
        name: "Beach Roulette"
      },
      {
        image: im3,
        name: "Teenpatti Joker 20-20"
      },
      {
        image: im1,
        name: "Lucky 6"
      },
      {
        image: im2,
        name: "Beach Roulette"
      },
      {
        image: im3,
        name: "Teenpatti Joker 20-20"
      },

    // add more cards here
  ];

  return (
    <div className="grid  sm:grid-cols-3 md:grid-cols-10  mt-2 ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-28 bg-white shadow-md  overflow-hidden hover:scale-105 transition-transform duration-200"
        >
          <img
            src={card.image}
            alt={card.name}
            className="w-28 h-30 object-cover"
          />
          <div className="p-1 text-center text-xs font-medium">{card.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
