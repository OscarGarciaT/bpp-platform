import { Typography } from '@mui/material';
import LearningCard from '../components/LearningCard';
import { learningOptions } from '../data/appData';

export default function Home({ theme }) {
  return (
    <div
      className="flex-1 overflow-auto p-4 md:p-8"
      style={{ backgroundColor: `${theme.palette.background.default}CC` }}
    >
      <Typography variant="h3" className="mb-4 text-center font-bold">
        ¡Explora y Aprende!
      </Typography>
      <Typography variant="h6" className="mb-8 text-center">
        Elige una aventura para comenzar
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {learningOptions.map((option, index) => (
          <LearningCard key={option.title} option={option} index={index} />
        ))}
      </div>
    </div>
  );
}
