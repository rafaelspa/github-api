import "./styles.css";

type Props = {
  text: string;
};

export default function PrimaryButton({ text }: Props) {
  return <button className="ga-primary-button">{text}</button>;
}
