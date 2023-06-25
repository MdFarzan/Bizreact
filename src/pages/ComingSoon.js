import Footer from "../components/Footer";
import PageHeader from "./../components/PageHeader";
import { useParams } from "react-router-dom";

export default function About() {
  const params = useParams();
  let headerTitle = params.name.replace("-", " ");
  headerTitle = headerTitle.charAt(0).toUpperCase() + headerTitle.slice(1);

  return (
    <>
      <PageHeader title={headerTitle} />
      <p class="lead text-center p-3 vh-100"> Coming soon</p>
      <Footer />
    </>
  );
}
