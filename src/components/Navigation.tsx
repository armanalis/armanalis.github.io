import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 260;
const navItems = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Education', 'education'],
  ['Projects', 'projects'],
  ['Awards', 'awards'],
  ['Contact', 'contact']
];

function Navigation({parentToChild, modeChange}: any) {
  const {mode} = parentToChild;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon/>Menu</p>
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item[1])}>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
        <Toolbar className='navigation-bar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="button"
            onClick={() => scrollToSection('home')}
            sx={{
              display: { xs: 'none', sm: 'inline-flex' },
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"Syne", sans-serif',
              fontWeight: 700,
              fontSize: '1.05rem',
              letterSpacing: '-0.02em',
              color: 'inherit',
              mr: 'auto',
              pl: 0,
            }}
          >
            Ali Arman Dai
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 0.5, ml: 'auto' }}>
            {navItems.map((item) => (
              <Button key={item[0]} onClick={() => scrollToSection(item[1])}>
                {item[0]}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            onClick={() => modeChange()}
            aria-label="toggle color mode"
            sx={{ ml: 1 }}
          >
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: 'transparent',
              boxShadow: 'none',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
