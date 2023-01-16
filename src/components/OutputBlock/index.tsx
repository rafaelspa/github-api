import "./styles.css";
import { GithubProfile } from "../../models/github-profile";

type Props = {
  githubProfile: GithubProfile;
};

export default function OutputBlock({ githubProfile }: Props) {
  return (
    <div className="ga-output-block">
      <div className="ga-output-container">
        <img
          className="ga-output-img"
          src={githubProfile.avatar_url}
          alt="Profile picture"
        />
        <div className="ga-output-form">
          <h2 className="ga-output-form-title">Informações</h2>
          <div className="ga-output-form-input">
            <div className="ga-output-form-url">Perfil:</div>
            <p>{githubProfile.url}</p>
          </div>
          <div className="ga-output-form-input">
            <div className="ga-output-form-followers">Seguidores:</div>
            <p>{githubProfile.followers}</p>
          </div>
          <div className="ga-output-form-input">
            <div className="ga-output-form-location">Localidade:</div>
            <p>{githubProfile.location}</p>
          </div>
          <div className="ga-output-form-input">
            <div className="ga-output-form-name">Nome:</div>
            <p>{githubProfile.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
