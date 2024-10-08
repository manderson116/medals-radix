import { useState } from "react";

function Country(props) {
  const [name, setName] = useState("United States");
  const [gold, setGold] = useState(0);

  function handleClick() {
    setGold(gold + 1);
  }

  return (
    <div className="country">
      <h2>{props.country.name}</h2>
      <div>
        Gold medals: {props.country.gold}
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
}

export default Country;
