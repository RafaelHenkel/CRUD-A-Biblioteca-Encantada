interface ButtonDefaultProps {
  label: string;
  action: () => void;
}

function ButtonDefault({ action, label }: ButtonDefaultProps) {
  return <button onClick={action}>{label}</button>;
}

export default ButtonDefault;
