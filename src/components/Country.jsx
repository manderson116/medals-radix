import { useState } from "react";

function Country() {
  const [name, setName] = useState("United States");
  const [gold, setGold] = useState(0);

  return (
    <div className="country">
      <h2>{name}</h2>
      <div>
        Gold medals: {gold}
        <button>+</button>
      </div>
    </div>
  );
}

export default Country;
