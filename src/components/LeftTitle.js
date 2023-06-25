import "./GlobalTitle.css";

export default function LeftTitle(props) {
  return (
    <div className="mt-3">
      <p className="lead mb-2 text-uppercase subtitle text-center text-md-start">
        {props.subtitle}
      </p>
      <h2 className="text-center text-md-start">{props.title}</h2>
    </div>
  );
}
