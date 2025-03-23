
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type DiagnosticCardProps = {
  title?: string;
  name?: string; // Adding name as an optional prop
  description: string;
  icon?: React.ReactNode;
  image?: string; // Adding image as an optional prop
  to?: string;
  link?: string; // Adding link as an optional prop
  color?: string;
};

const DiagnosticCard: React.FC<DiagnosticCardProps> = ({ 
  title, 
  name,
  description, 
  icon,
  image,
  to,
  link,
  color = 'medisync-100'
}) => {
  // Extract the base color from the color prop
  const baseColor = color.split('-')[0];
  const colorClass = `bg-${color}`;
  const hoverColorClass = `group-hover:bg-${baseColor}-200`;
  
  // Use name as title if title is not provided
  const displayTitle = title || name;
  
  // Use link as to if to is not provided
  const navigateTo = to || link || '/';

  return (
    <Link 
      to={navigateTo} 
      className="diagnostic-card group bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md flex flex-col h-full"
    >
      {icon && (
        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300", colorClass)}>
          {icon}
        </div>
      )}
      
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img src={image} alt={displayTitle} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
      )}
      
      <h3 className="text-lg font-semibold mb-2">{displayTitle}</h3>
      <p className="text-gray-600 mb-4 text-sm flex-grow">{description}</p>
      <div className="flex items-center text-medisync-600 font-medium">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default DiagnosticCard;
