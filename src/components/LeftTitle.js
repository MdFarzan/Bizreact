import "./GlobalTitle.css";

export default function LeftTitle(props) {
  return (
    <div>
      <p className="lead mb-2 text-uppercase subtitle">{props.subtitle}</p>
      <h2>{props.title}</h2>
    </div>
  );
}
