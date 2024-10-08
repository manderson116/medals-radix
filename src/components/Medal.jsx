function Medal(props) {
  return (
    <div className="medals">
      {props.country[props.medal.name]} {props.medal.name} medals
    </div>
  );
}

export default Medal;
