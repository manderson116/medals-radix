import Medal from "./Medal";

function Country(props) {
  return (
    <div className="country">
      <div className="header">
        <h2>{props.country.name}</h2>
        <div
          className="basket"
          onClick={() => props.onDelete(props.country.id)}
        >
          🗑️
        </div>
      </div>
      {props.medals.map((medal) => (
        <Medal key={medal.id} medal={medal} country={props.country} />
      ))}
    </div>
  );
}

export default Country;
