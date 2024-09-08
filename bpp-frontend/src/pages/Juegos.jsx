import { Typography } from '@mui/material';

export default function Juegos({ theme }) {
  return (
    <div
      className="flex-1 overflow-auto p-4 md:p-8"
      style={{ backgroundColor: `${theme.palette.background.default}CC` }}
    >
      <Typography variant="h3" className="mb-4 text-center font-bold">
        Juegos
      </Typography>
      <Typography variant="body1" className="text-center">
        Contenido de la página Juegos en construcción...
      </Typography>
    </div>
  );
}
