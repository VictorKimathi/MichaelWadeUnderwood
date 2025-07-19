import React from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black';
  const variantStyles = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-gray-100 text-black hover:bg-gray-200',
    outline: 'border border-gray-300 bg-transparent text-black hover:bg-gray-50'
  };
  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 rounded',
    md: 'text-sm px-5 py-2.5 rounded-md',
    lg: 'text-base px-6 py-3 rounded-md'
  };
  const widthStyles = fullWidth ? 'w-full' : '';
  return <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`} {...props}>
      {children}
    </button>;
};
export default Button;