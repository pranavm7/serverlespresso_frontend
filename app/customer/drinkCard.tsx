"use client";

import { useState } from "react";

type Drink = {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
};

export default function DrinkCard(props: { drink: Drink }) {
  const [selected, setSelected] = useState(false);
  return (
    <li
      key={props.drink.id}
      className="bg-blue-500 p-6 cursor-pointer hover:bg-red-300 transition"
      onClick={() => {
        setSelected(true);
      }}
    >
      <h2 className="text-xl">{props.drink.title}</h2>
      <p>{props.drink.description}</p>
      <ul>
        {props.drink.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <img src={props.drink.image} alt={props.drink.title} width={400} />

      {selected ? (
        <div
          className="h-screen w-screen backdrop-blur-sm fixed top-0 left-0"
          onClick={(e) => {
            setSelected(false);
            e.stopPropagation();
          }}
        >
          <div className="bg-blue-500 p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl">{props.drink.title}</h2>
            <p>{props.drink.description}</p>
            <ul>
              {props.drink.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
            <img src={props.drink.image} alt={props.drink.title} width={400} />
          </div>
        </div>
      ) : null}
    </li>
  );
}
