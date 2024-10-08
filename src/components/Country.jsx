import Medal from "./Medal";

function Country(props) {
  function getMedalsTotal() {
    let sum = 0;
    props.medals.forEach((medal) => {
      sum += props.country[medal.name];
    });
    return sum;
  }

  return (
    <div className="country">
      <div className="header">
        <h2>{props.country.name}</h2>
        <div>{getMedalsTotal()}</div>
        <div
          className="basket"
          onClick={() => props.onDelete(props.country.id)}
        >
          🗑️
        </div>
      </div>
      {props.medals.map((medal) => (
        <Medal
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          key={medal.id}
          medal={medal}
          country={props.country}
        />
      ))}
    </div>
  );
}

export default Country;
