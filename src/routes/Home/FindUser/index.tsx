import "./styles.css";
import PrimaryButton from "../../../components/PrimaryButton";
import { findGithubUser } from "../../../services/github-user-service";
import { useEffect, useState } from "react";
import { GithubProfile } from "../../../models/github-profile";
import OutputBlock from "../../../components/OutputBlock";
import NotFound from "../NotFound";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function FindUser() {
  type FormData = {
    login: string;
  };

  const [formData, setFormData] = useState<FormData>({
    login: "",
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const [githubProfile, setGithubProfile] = useState<GithubProfile>();

  const [notFound, setNotFound] = useState<boolean>(false);

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
    let login = value;
    if (login) {
      setSearchParams({ login });
    } else {
      setSearchParams({});
    }
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    findGithubUser(formData.login)
      .then((response) => {
        setGithubProfile({
          avatar_url: response.data.avatar_url,
          url: response.data.url,
          followers: response.data.followers,
          location: response.data.location,
          name: response.data.name,
        });
      })
      .catch(() => {
        setNotFound(true);
      });
  }

  useEffect(() => {
    setGithubProfile(undefined);
    setNotFound(false);
  }, [formData]);

  return (
    <main className="ga-find-user-main">
      <div className="ga-input-block">
        <form className="ga-input-block-form" onSubmit={handleFormSubmit}>
          <div className="ga-input-block-text">
            <h2 className="ga-input-block-title">Encontre um perfil Github</h2>
            {formData && (
              <input
                name="login"
                value={formData.login}
                className="ga-input-text"
                type="text"
                placeholder="Usuário Github"
                onChange={handleInputChange}
              />
            )}
          </div>
          <PrimaryButton
            text="Encontrar"
            buttonType="submit"
          />
        </form>
      </div>

      {githubProfile && <OutputBlock githubProfile={githubProfile} />}
      {notFound && <NotFound />}
    </main>
  );
}
