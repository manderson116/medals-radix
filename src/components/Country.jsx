import { useState } from "react";

function Country() {
  const [name, setName] = useState("United States");
  const [gold, setGold] = useState(0);

  return (
    <>
      <h2>{name}</h2>
      <div>Gold medals: {gold}</div>
    </>
  );
}

export default Country;
