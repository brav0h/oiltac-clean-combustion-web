
interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = "", size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12", 
    lg: "h-16"
  };

  return (
    <img 
      src="/lovable-uploads/1d61b785-8ed4-488d-903c-3caacadd3803.png"
      alt="OILTAC"
      className={`${sizeClasses[size]} w-auto ${className}`}
    />
  );
};

export default Logo;
