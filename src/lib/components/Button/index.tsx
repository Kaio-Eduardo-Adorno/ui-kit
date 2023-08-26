import "../../../index.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button
      type='button'
      className={"bg-blue-500 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded"}
      {...props}
    >
      {label}
    </button>
  );
};
