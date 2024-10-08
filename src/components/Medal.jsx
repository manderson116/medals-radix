function Medal(props) {
  return (
    <div className="medals">
      {props.country[props.medal.name]} {props.medal.name} medals
      <div className="button">
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
}

export default Medal;
