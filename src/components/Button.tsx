import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Add any additional custom props you need for your button
  // For example, you can add a custom className prop
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
