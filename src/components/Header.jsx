import {alpha, AppBar, Box, Button, Container, IconButton, styled, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Box sx={{flexGrow: 1}}>
                    <Link to={"/"}>
                        <Button sx={{color: "#fff"}}>
                            <Typography
                                variant={"h6"}
                                fontWeight={"bold"}
                                component="div"
                            >
                                Molgorithm
                            </Typography>
                        </Button>
                    </Link>
                </Box>
                <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                    <Link to={"/"}>
                        <Button sx={{color: '#fff'}}>
                            <Typography>홈</Typography>
                        </Button>
                    </Link>
                </Box>
                <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                    <Button sx={{color: '#fff'}}>
                        <Typography>수상 경력</Typography>
                    </Button>
                </Box>
                <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                    <Link to={"/faqs"}>
                        <Button sx={{color: '#fff'}}>
                            <Typography>FAQ</Typography>
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
export default Header;