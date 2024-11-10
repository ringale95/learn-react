interface ButtonProps {
    children: string;
    onClick: () => void;
    color: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
}
export const Button = ({children, onClick, color}: ButtonProps) => {
  return (
      <button className={'btn btn-' + color}
          onClick={onClick  }
      >
          {children}
      </button>
  )
}
