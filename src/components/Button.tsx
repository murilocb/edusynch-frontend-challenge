import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button className={`${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
