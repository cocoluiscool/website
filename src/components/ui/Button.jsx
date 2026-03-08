import { cn } from './utils';

export const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-95';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-teal-700 shadow-md hover:shadow-float',
    secondary: 'bg-secondary text-white hover:bg-rose-600 shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primaryLight',
    ghost: 'text-textMuted hover:text-primary hover:bg-primaryLight/50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const sizeClass = props.size ? sizes[props.size] : sizes.md;

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizeClass, className)} 
      {...props}
    >
      {children}
    </button>
  );
};
