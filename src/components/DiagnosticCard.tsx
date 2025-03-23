
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type DiagnosticCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  color?: string;
};

const DiagnosticCard: React.FC<DiagnosticCardProps> = ({ 
  title, 
  description, 
  icon, 
  to,
  color = 'medisync-100'
}) => {
  // Extract the base color from the color prop
  const baseColor = color.split('-')[0];
  const colorClass = `bg-${color}`;
  const hoverColorClass = `group-hover:bg-${baseColor}-200`;

  return (
    <Link 
      to={to} 
      className="diagnostic-card group bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md flex flex-col h-full"
    >
      <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300", colorClass)}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm flex-grow">{description}</p>
      <div className="flex items-center text-medisync-600 font-medium">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default DiagnosticCard;
