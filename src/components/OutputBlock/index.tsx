import "./styles.css";
import githubImg from "../../assets/github_placeholder.png";

export default function OutputBlock() {
  return (
    <div className="ga-output-block">
      <div className="ga-output-container">
        <img className="ga-output-img" src={githubImg} alt="Profile picture" />
        <div className="ga-output-form">
          <h2 className="ga-output-form-title">Informações</h2>
          <div className="ga-output-form-input">
            <div className="ga-output-form-url">Perfil:</div>
            <p> https://api.github.com/users/acenelio</p>
          </div>
          <div className="ga-output-form-input">
            <div className="ga-output-form-followers">Seguidores:</div>
            <p>4379</p>
          </div>
          <div className="ga-output-form-input">
            <div className="ga-output-form-location">Localidade: </div>
            <p>Uberlândia</p>
          </div>
          <div className="ga-output-form-input">
            <div className="ga-output-form-name">Nome: </div>
            <p>Nelio Alves</p>
          </div>
        </div>
      </div>
    </div>
  );
}
