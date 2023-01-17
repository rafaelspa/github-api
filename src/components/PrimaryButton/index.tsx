import "./styles.css";

type Props = {
  text: string;
  buttonType: any;
};

export default function PrimaryButton({ text, buttonType }: Props) {
  return (
    <button type={buttonType} className="ga-primary-button">
      {text}
    </button>
  );
}
