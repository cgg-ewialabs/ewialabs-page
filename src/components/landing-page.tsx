import { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface LandingPageProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  onButtonClick?: () => void;
}

const LandingPage: FC<LandingPageProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  onButtonClick
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center min-h-screen">
      <div className="w-full md:w-1/2 p-8">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-6">{description}</p>
          <Button 
            onClick={onButtonClick}
            className="w-fit"
          >
            {buttonText}
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative h-64 md:h-screen">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LandingPage;
