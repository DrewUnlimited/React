import React from "react";

interface Props{
    children: string;
    onClick: () => void;
    color?: string;
}
const Button = ({ children, onClick, color="success" }: Props) => {
  return (
    <div>
      <button className={"btn btn-"+ color} onClick = {onClick} color = "red">
        {children}
      </button>
    </div>
  );
};

export default Button;
