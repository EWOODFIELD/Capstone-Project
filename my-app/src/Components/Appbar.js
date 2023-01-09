//[AppComp 1.0]

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { NavLink } from 'react-router-dom';
import CustomContext from './Context';
import { useContext } from 'react';
import Logout from './Logout';



//[APB 1.0] Defines Website Pages and Navigation Routes
const pages = [
  <NavLink to='/home' id="my-nav">Home</NavLink>, 
  <NavLink to='/leaders' id="my-nav">Leaders</NavLink>, 
  <NavLink to='/events' id="my-nav">Events</NavLink>, 
  <NavLink to='/profile' id="my-nav">Profile</NavLink>,
  <NavLink to='/eventinfoupdate/id' id="my-nav">Update Event</NavLink>  
];

//[APB 1.10] Defines Profile Dropdown Links and Navigation Routes
const settings = [
<NavLink to='/profile' id="my-nav">Profile</NavLink>,
   <NavLink id="my-nav">Account</NavLink>, 
   <NavLink id="my-nav">Dashboard</NavLink>, 
  <NavLink to='/logoff' id="my-nav">Logout</NavLink>
];

//[APB 1.20] Defines Application Navbar Theme, States, Functionality, and Structure
function ResponsiveAppBar() {
    const theme = createTheme();

    theme.typography.h3 = {
      fontSize: '1.2rem',
      '@media (min-width:600px)': { //Media Breakpoint
        fontSize: '1.5rem',
      },
      [theme.breakpoints.up('md')]: { //Media Breakpoint
        fontSize: '2.4rem',
      },
    };
    
//[APB 1.21] UseStates for Navigating/Opening/Closing
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //[APB 1.22] Content to be Displayed on Webpage
  return (
    <ThemeProvider theme={theme}>  {/* Utilise defined theme  */}

    <AppBar position="static" style={{background: "black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters id="my-tool">  {/* Controls Website Logo and Font Properties */}
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{  //Control Logo Font/Sizing/Spacing
              mr: 25,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Ubuntu',
              fontWeight: 500,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DBSCompDex
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> 
            <IconButton  // Controls Website User Icon Properties/Functionality
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu  // Controls User Icon Dropdown Functionality 
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (  // Controls Website User Icon Properties/Functionality
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home" //Website Title Returns User to Login Screen
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'ubuntu',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DBSCompDex
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button id="nav-button"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton onClick={handleOpenUserMenu} sx={{ height: "85px", width: "85px"}}>
                <PeopleAltIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;