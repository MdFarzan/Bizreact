import "./GlobalTitle.css";

export default function CenterTitle(props) {
  return (
    <div className="text-center">
      <p className="lead mb-2 text-uppercase subtitle text-center">
        {props.subtitle}
      </p>
      <h2 className="text-center">{props.title}</h2>
    </div>
  );
}
