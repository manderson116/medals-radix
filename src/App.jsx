import { useState } from "react";
import Country from "./components/Country";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 2 },
    { id: 2, name: "China", gold: 3 },
    { id: 3, name: "France", gold: 0 },
  ]);
  return (
    <div className="countries">
      {countries.map((country) => (
        <Country key={country.id} country={country} />
      ))}
    </div>
  );
}

export default App;
