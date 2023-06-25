import "./GlobalTitle.css";

export default function CenterTitle(props) {
  return (
    <div className="text-center">
      <p className="lead mb-2 text-uppercase subtitle">{props.subtitle}</p>
      <h2>{props.title}</h2>
    </div>
  );
}
