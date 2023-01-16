import "./styles.css";

type Props = {
  text: string;
  buttonType: any;
  onClick: any;
};

export default function PrimaryButton({ text, buttonType, onClick }: Props) {
  return (
    <button type={buttonType} onClick={onClick} className="ga-primary-button">
      {text}
    </button>
  );
}
