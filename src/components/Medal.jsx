function Medal(props) {
  return (
    <div className="medals">
      {props.medal.name} medals:
      <div className="button">
        <button
          disabled={props.country[props.medal.name] === 0}
          onClick={() => props.onDecrement(props.country.id, props.medal.name)}
        >
          -
        </button>
        <div className="medal-count">{props.country[props.medal.name]}</div>
        <button
          onClick={() => props.onIncrement(props.country.id, props.medal.name)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Medal;
