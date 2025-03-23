
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
  return (
    <Link 
      to={to} 
      className="diagnostic-card group"
    >
      <div className={`w-12 h-12 rounded-full bg-${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="flex items-center text-medisync-600 font-medium">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default DiagnosticCard;
