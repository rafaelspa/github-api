import "./styles.css";
import PrimaryButton from "../PrimaryButton";

export default function InputBlock() {
  return (
    <div className="ga-input-block">
      <form className="ga-input-block-form">
        <div className="ga-input-block-text">
          <h2 className="ga-input-block-title">Encontre um perfil Github</h2>
          <input className="ga-input-text" type="text" placeholder="Usuário Github" />
        </div>
        <PrimaryButton text="Encontrar" />
      </form>
    </div>
  );
}
