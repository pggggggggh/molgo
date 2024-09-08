import {
    alpha,
    AppBar,
    Box,
    Button,
    Container,
    Divider, Drawer,
    IconButton,
    List, ListItem, ListItemButton, ListItemText,
    styled,
    Toolbar,
    Typography
} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import React, {useEffect, useState} from "react";

const drawerWidth = 240;

const Header = (props) => {
    const location = useLocation();
    const [showAppBar, setShowAppBar] = useState(false);
    // const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        if (location.pathname === '/') setShowAppBar(false);

        const handleScroll = () => {
            if (window.scrollY > window.innerHeight - 100) {
                setShowAppBar(true);
            } else {
                setShowAppBar(false);
            }
        };

        if (location.pathname === '/') {
            window.addEventListener('scroll', handleScroll);
        }

        // 컴포넌트 언마운트 시 scroll 이벤트 제거
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    if (showAppBar === false) return;

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const navItems = ['Home', 'About', 'Contact'];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Molgorithm
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <List sx={{ textAlign: 'center', width:"100%" }}>
                        <ListItemButton component={Link} to="/" sx={{ textAlign: 'center', color: 'inherit', textDecoration: 'none', width: '100%' }}>
                            <ListItemText primary={"홈"} />
                        </ListItemButton>
                        <ListItemButton component={Link} to="/#awards" sx={{ textAlign: 'center', color: 'inherit', textDecoration: 'none', width: '100%' }}>
                            <ListItemText primary={"수상 경력"} />
                        </ListItemButton>
                        <ListItemButton component={Link} to="/rating" sx={{ textAlign: 'center', color: 'inherit', textDecoration: 'none', width: '100%' }}>
                            <ListItemText primary={"레이팅"} />
                        </ListItemButton>
                        <ListItemButton component={Link} to="/faq" sx={{ textAlign: 'center', color: 'inherit', textDecoration: 'none', width: '100%' }}>
                            <ListItemText primary={"FAQ"} />
                        </ListItemButton>
                    </List>
                </ListItem>
            </List>
        </Box>

    );

    const container = document.body;

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Box sx={{flexGrow: 1}}>
                        <Link to={"/"}>
                            <Button sx={{color: "#fff"}}>
                                <Typography
                                    variant={"h6"}
                                    fontWeight={"light"}
                                >
                                    Molgorithm
                                </Typography>
                            </Button>
                        </Link>
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        <Link to={"/"}>
                            <Button sx={{color: '#fff'}}>
                                <Typography>홈</Typography>
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        <Link to={"/#awards"}>
                            <Button sx={{color: '#fff'}}>
                                <Typography>수상 경력</Typography>
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        <Link to={"/rating"}>
                            <Button sx={{color: '#fff'}}>
                                <Typography>레이팅</Typography>
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        <Link to={"/faq"}>
                            <Button sx={{color: '#fff'}}>
                                <Typography>FAQ</Typography>
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    anchor={"right"}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </>
    )
        ;
};
export default Header;