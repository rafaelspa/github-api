import "./styles.css";
import PrimaryButton from "../../../components/PrimaryButton";
import { Link } from "react-router-dom";

export default function HomeBody() {
  return (
    <main className="ga-home-body-main">
      <div className="ga-home-text-block">
        <h2>Desafio Github API</h2>
        <p>DevSuperior - Escola de programação</p>
      </div>
      <Link to="/find-user">
        <PrimaryButton text="Começar" onClick={undefined} buttonType="button" />
      </Link>
    </main>
  );
}
