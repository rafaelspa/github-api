import InputBlock from '../../../components/InputBlock';
import './styles.css';

export default function NotFound() {
  return (
    <main className="ga-not-found-main">
      <InputBlock />
      <div className="ga-not-found">Erro ao buscar usuário</div>
    </main>
  );
}
