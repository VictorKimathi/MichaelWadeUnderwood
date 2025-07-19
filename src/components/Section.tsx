import React from 'react';
interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  background?: 'white' | 'light' | 'dark';
}
const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  fullWidth = false,
  background = 'white'
}) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-black text-white'
  };
  return <section id={id} className={`py-16 md:py-24 ${bgColors[background]} ${className}`}>
      <div className={fullWidth ? 'w-full' : 'container mx-auto px-6'}>
        {children}
      </div>
    </section>;
};
export default Section;