import { useState, useEffect } from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Select,
  MenuItem,
  IconButton,
  Paper,
  Box,
  Container,
  TextField,
} from '@mui/material';
import { ChevronRight, ChevronLeft } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const plantCategories = [
  {
    title: 'Plantas Principales',
    plants: [
      {
        name: 'Ceibo',
        image:
          'https://images.unsplash.com/photo-1605943239011-9c3a2bf1e6a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Roble',
        image:
          'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Pino',
        image:
          'https://images.unsplash.com/photo-1518124880777-cf8c82231ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Eucalipto',
        image:
          'https://images.unsplash.com/photo-1628552704792-ac406d3aaed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Jacaranda',
        image:
          'https://images.unsplash.com/photo-1558694440-03ade9215d7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Araucaria',
        image:
          'https://images.unsplash.com/photo-1605943239011-9c3a2bf1e6a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      },
    ],
  },
  {
    title: 'Plantas Toxicas',
    plants: [
      {
        name: 'Anturio',
        image:
          'https://images.unsplash.com/photo-1558694440-03ade9215d7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Adelfa',
        image:
          'https://images.unsplash.com/photo-1558694440-03ade9215d7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Cicuta',
        image:
          'https://images.unsplash.com/photo-1558694440-03ade9215d7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Belladona',
        image:
          'https://images.unsplash.com/photo-1558694440-03ade9215d7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Ricino',
        image:
          'https://images.unsplash.com/photo-1558694440-03ade9215d7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Acónito',
        image:
          'https://images.unsplash.com/photo-1558694440-03ade9215d7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      },
    ],
  },
  {
    title: 'Plantas Frutales',
    plants: [
      {
        name: 'Cocotero',
        image:
          'https://images.unsplash.com/photo-1558694440-03ade9215d7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Manzano',
        image:
          'https://images.unsplash.com/photo-1558694440-03ade9215d7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Naranjo',
        image:
          'https://images.unsplash.com/photo-1558694440-03ade9215d7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Limonero',
        image:
          'https://images.unsplash.com/photo-1558694440-03ade9215d7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Mango',
        image:
          'https://images.unsplash.com/photo-1558694440-03ade9215d7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Aguacate',
        image:
          'https://images.unsplash.com/photo-1558694440-03ade9215d7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      },
    ],
  },
];

const PlantCategory = ({ category }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visiblePlants, setVisiblePlants] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisiblePlants(1);
      else if (window.innerWidth < 1024) setVisiblePlants(3);
      else setVisiblePlants(5);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(category.plants.length - visiblePlants, prevIndex + 1)
    );
  };

  return (
    <Paper
      elevation={3}
      className="p-6 mb-8 bg-gradient-to-r from-green-50 to-blue-50"
    >
      <Typography
        variant="h6"
        className="mb-6 font-bold text-green-800 border-b-2 border-green-500 pb-2 inline-block"
      >
        {category.title}
      </Typography>
      <Box className="flex items-center mt-4" sx={{ py: 2 }}>
        <IconButton
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="mr-2 bg-green-100 hover:bg-green-200"
        >
          <ChevronLeft />
        </IconButton>
        <AnimatePresence initial={false}>
          <motion.div
            className="flex space-x-4 overflow-hidden"
            style={{
              width: `${visiblePlants * 12 + (visiblePlants - 1) * 1}rem`,
            }}
          >
            {category.plants
              .slice(startIndex, startIndex + visiblePlants)
              .map((plant, index) => (
                <motion.div
                  key={startIndex + index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3 }}
                  className="px-2 py-4"
                >
                  <Card className="w-44 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <CardMedia
                      component="img"
                      height="140"
                      image={plant.image}
                      alt={plant.name}
                      className="h-36 object-cover"
                    />
                    <CardContent className="bg-gradient-to-b from-white to-green-100 p-3">
                      <Typography
                        variant="subtitle1"
                        className="text-center font-semibold text-green-800"
                      >
                        {plant.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
        <IconButton
          onClick={handleNext}
          disabled={startIndex + visiblePlants >= category.plants.length}
          className="ml-2 bg-green-100 hover:bg-green-200"
        >
          <ChevronRight />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default function Flora({ theme }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCategories = plantCategories
    .map((category) => ({
      ...category,
      plants: category.plants.filter((plant) =>
        plant.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(
      (category) =>
        category.plants.length > 0 &&
        (selectedCategory === '' || category.title === selectedCategory)
    );

  return (
    <Box
      className="flex flex-col min-h-full"
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M0 0h20L0 20z"/%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.1,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 1, flexGrow: 1, py: 4 }}
      >
        <Box mb={4} p={4} bgcolor="rgba(255, 255, 255, 0.9)" borderRadius={4}>
          <Typography
            variant="h3"
            component="h1"
            className="mb-4 text-center font-bold"
            color="primary"
            sx={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              fontWeight: 800,
            }}
          >
            Enciclopedia de Flora
          </Typography>
        </Box>

        <Box mb={4} p={4} bgcolor="rgba(255, 255, 255, 0.9)" borderRadius={4}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              displayEmpty
              sx={{
                width: '48%',
                bgcolor: 'background.paper',
                borderRadius: 2,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              <MenuItem value="">Todas las categorías</MenuItem>
              {plantCategories.map((category, index) => (
                <MenuItem key={index} value={category.title}>
                  {category.title}
                </MenuItem>
              ))}
            </Select>
            <TextField
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Buscar plantas..."
              variant="outlined"
              sx={{
                width: '48%',
                bgcolor: 'background.paper',
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            />
          </Box>
        </Box>

        {filteredCategories.map((category, index) => (
          <PlantCategory key={index} category={category} />
        ))}
      </Container>
    </Box>
  );
}
