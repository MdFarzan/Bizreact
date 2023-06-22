export default function PageHeader(props) {
  return (
    <section className="py-4 text-center bg-dark text-white">
      <h1>
        {props.title === "" || props.title == null ? "Page Title" : props.title}
      </h1>
    </section>
  );
}
