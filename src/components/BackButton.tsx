
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BackButtonProps {
  to?: string;
  label?: string;
}

const BackButton = ({ to, label = 'Back' }: BackButtonProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1); // Go back to the previous page in history
    }
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
      onClick={handleClick}
    >
      <ChevronLeft className="h-4 w-4 mr-1" />
      {label}
    </Button>
  );
};

export default BackButton;
