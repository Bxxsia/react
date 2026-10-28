import "./BasicButton.css";

type BasicButtonProps = {
  text: string;
};

function BasicButton({ text }: BasicButtonProps) {
  return (
    <button className="basic-button">
      {text}
    </button>
  );
}

export default BasicButton;