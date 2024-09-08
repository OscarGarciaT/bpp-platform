import { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  useMediaQuery,
} from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import Comunidad from './pages/Comunidad';
import Fauna from './pages/Fauna';
import Flora from './pages/Flora';
import Juegos from './pages/Juegos';
import Mapa from './pages/Mapa';
import { colorSchemes, navItems } from './data/appData';

export default function App() {
  const [activeItem, setActiveItem] = useState('Inicio');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [colorScheme, setColorScheme] = useState('spring');
  const [anchorEl, setAnchorEl] = useState(null);
  const isSmallScreen = useMediaQuery('(max-width:960px)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: colorSchemes[colorScheme].primary,
          },
          secondary: {
            main: colorSchemes[colorScheme].secondary,
          },
          background: {
            default: colorSchemes[colorScheme].background,
          },
          text: {
            primary: colorSchemes[colorScheme].text,
          },
        },
        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: '16px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition:
                  'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                },
              },
            },
          },
        },
      }),
    [colorScheme]
  );

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavItemClick = (text) => {
    setActiveItem(text);
    if (isSmallScreen) {
      setSidebarOpen(false);
    }
  };

  const handleColorSchemeMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleColorSchemeMenuClose = () => {
    setAnchorEl(null);
  };

  const handleColorSchemeChange = (scheme) => {
    setColorScheme(scheme);
    handleColorSchemeMenuClose();
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          className="flex h-screen"
          style={{
            backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
          }}
        >
          <Sidebar
            isOpen={sidebarOpen}
            toggleSidebar={toggleSidebar}
            navItems={navItems}
            activeItem={activeItem}
            handleNavItemClick={handleNavItemClick}
            isSmallScreen={isSmallScreen}
            theme={theme}
          />

          <div className="flex-1 flex flex-col overflow-hidden">
            <Header
              toggleSidebar={toggleSidebar}
              handleColorSchemeMenuOpen={handleColorSchemeMenuOpen}
              anchorEl={anchorEl}
              handleColorSchemeMenuClose={handleColorSchemeMenuClose}
              handleColorSchemeChange={handleColorSchemeChange}
            />

            <Routes>
              <Route path="/" element={<Home theme={theme} />} />
              <Route path="/comunidad" element={<Comunidad theme={theme} />} />
              <Route path="/fauna" element={<Fauna theme={theme} />} />
              <Route path="/flora" element={<Flora theme={theme} />} />
              <Route path="/juegos" element={<Juegos theme={theme} />} />
              <Route path="/mapa" element={<Mapa theme={theme} />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}
