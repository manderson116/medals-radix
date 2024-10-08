import { useState, useRef } from "react";
import Country from "./components/Country";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
    { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
    { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
  ]);
  const medals = useRef([
    { id: 1, name: "gold" },
    { id: 2, name: "silver" },
    { id: 3, name: "bronze" },
  ]);

  function handleDelete(id) {
    console.log(`delete country: ${id}`);
    setCountries(countries.filter((c) => c.id !== id));
  }
  function getAllMedalsTotal() {
    let sum = 0;
    medals.current.forEach((medal) => {
      sum += countries.reduce((a, b) => a + b[medal.name], 0);
    });
    return sum;
  }

  return (
    <>
      <h1 id="page-header">Olympic Medals {getAllMedalsTotal()}</h1>
      <div className="countries">
        {countries.map((country) => (
          <Country
            onDelete={handleDelete}
            key={country.id}
            country={country}
            medals={medals.current}
          />
        ))}
      </div>
    </>
  );
}

export default App;
