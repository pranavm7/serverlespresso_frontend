import DrinkCard from "./drinkCard";

type Drink = {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
};

export default async function Catalog() {
  const result = await fetch("https://api.sampleapis.com/coffee/iced");
  const data: Drink[] = await result.json();

  return (
    <main className="py-20 z-0" style={{ backgroundImage: "url(/bg.jpg)" }}>
      <h1 className="text-6xl text-center mb-20">Menu</h1>
      <ul className="grid grid-cols-3 gap-20 mx-60">
        {data.map((drink) => (
          <DrinkCard drink={drink} key={drink.id}></DrinkCard>
        ))}
      </ul>
    </main>
  );
}
