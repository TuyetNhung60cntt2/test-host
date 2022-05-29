import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom";

const Header = () => {
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

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', height: '5.5rem' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ paddingTop: '0.5rem' }}>
                    <NavLink to="/">
                        <img style={{ height: '2.5rem', width: '5rem', objectFit: 'fill' }} src="./Image/Logo/logo.png" alt="" />
                    </NavLink>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ fill: 'blue' }} />
                        </IconButton>
                        <Menu
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
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink to="/" style={{ color: 'blue', fontWeight: '600', textAlign: 'center', textDecoration: 'none' }}>Dashboard</NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink to="/notification" style={{ color: 'blue', fontWeight: '600', textAlign: 'center', textDecoration: 'none' }}>Notifications</NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink to="/document" style={{ color: 'blue', fontWeight: '600', textAlign: 'center', textDecoration: 'none' }}>Documents</NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink to="/project" style={{ color: 'blue', fontWeight: '600', textAlign: 'center', textDecoration: 'none' }}>Projects</NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink to="/isueetracking" style={{ color: 'blue', fontWeight: '600', textAlign: 'center', textDecoration: 'none' }}>Isuee Tracking</NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink to="/timesheet" style={{ color: 'blue', fontWeight: '600', textAlign: 'center', textDecoration: 'none' }}>Timesheet</NavLink>
                            </MenuItem>
                        </Menu>
                    </Box>
                    {/* <NavLink to="/"
                        style={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'blue', fontSize: '0.67em' }}
                    >
                        LOGO
                    </NavLink> */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', paddingRight: '1rem' }}>
                        <NavLink to="/" style={{ textDecoration: 'none' }} >
                            <Button sx={{ my: 2, color: 'blue', fontWeight: '600', display: 'block' }}>
                                Dashboard
                            </Button>
                        </NavLink>
                        <NavLink to="/notification" style={{ textDecoration: 'none' }} >
                            <Button sx={{ my: 2, color: 'blue', fontWeight: '600', display: 'block' }}>
                                Notifications
                            </Button>
                        </NavLink>
                        <NavLink to="/document" style={{ textDecoration: 'none' }} >
                            <Button sx={{ my: 2, color: 'blue', fontWeight: '600', display: 'block' }}>
                                Documents
                            </Button>
                        </NavLink>
                        <NavLink to="/project" style={{ textDecoration: 'none' }} >
                            <Button sx={{ my: 2, color: 'blue', fontWeight: '600', display: 'block' }}>
                                Projects
                            </Button>
                        </NavLink>
                        <NavLink to="/isueetracking" style={{ textDecoration: 'none' }} >
                            <Button sx={{ my: 2, color: 'blue', fontWeight: '600', display: 'block' }}>
                                Isuee Tracking
                            </Button>
                        </NavLink>
                        <NavLink to="/timesheet" style={{ textDecoration: 'none' }} >
                            <Button sx={{ my: 2, color: 'blue', fontWeight: '600', display: 'block' }}>
                                Timesheet
                            </Button>
                        </NavLink>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="./Image/Logo/icon.png" />
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
                            <MenuItem onClick={handleCloseUserMenu}>
                                <NavLink to="/job" style={{ color: 'blue', fontWeight: '600', textAlign: 'center', textDecoration: 'none' }}>JOBS</NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <NavLink to="/user" style={{ color: 'blue', fontWeight: '600', textAlign: 'center', textDecoration: 'none' }}>USERS</NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <NavLink to="/employee" style={{ color: 'blue', fontWeight: '600', textAlign: 'center', textDecoration: 'none' }}>EMPLOYEES</NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <NavLink to="/changepassword" style={{ color: 'blue', fontWeight: '600', textAlign: 'center', textDecoration: 'none' }}>CHANGE PASSWORD</NavLink>
                            </MenuItem><MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" sx={{ color: 'blue', fontWeight: '600' }}>LOG OUT</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default Header;