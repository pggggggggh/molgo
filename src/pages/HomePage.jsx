import {Box, Card, CardContent, CardMedia, Grow, Typography, useMediaQuery} from "@mui/material";
import {Grid2 as Grid} from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import CountUp from "react-countup";
import Carousel from "react-material-ui-carousel";
import Slide1 from "../assets/images/slide1.jpeg"
import Slide2 from "../assets/images/slide2.jpeg"
import Card1 from "../assets/images/card1.jpg"
import Awards from "@/components/Awards.jsx";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import { useTheme } from '@mui/material/styles';

const HomePage = () => {
    const location = useLocation();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        if (location.hash) {
            const targetElement = document.getElementById(location.hash.replace('#', ''));
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth',
                });
            }
        }
    }, [location]);

    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight - 40,
            behavior: 'smooth',
        });
    }
    const handleWheel = (e) => {
        const position = window.pageYOffset;

        // 특정 스크롤 위치에 도달하면 자동으로 내려가기
        if (position < window.innerHeight) {
            if (e.nativeEvent.wheelDelta < 0) {
                scrollDown();
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }
        }
    };


    return (
        <div onWheel={handleWheel}  >
            <Box
                display={"flex"}
                alignItems="center"
                flexDirection="column"
                position="absolute"
                top="50%"
                left="50%"
                sx={{
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                }}
                zIndex={10}
            >
                <ScrollAnimation animateIn="fadeIn">
                    <Typography variant={isSmallScreen ? 'h3' : 'h1'} fontWeight={"100"} mb={2}>
                        Molgorithm
                    </Typography>
                </ScrollAnimation>
                <Typography fontWeight={"100"}><CountUp end={145161}/> problems solved</Typography>
            </Box>
            <Box
                onClick={scrollDown} style={{ cursor: 'pointer' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                flexDirection="column"
                mb={5}
            >
                <Carousel
                    sx={{width: "100vw", height: "100vh"}}
                    stopAutoPlayOnHover={false}
                    interval={3000}
                >
                    <item>
                        <img src={Slide1} alt={""}
                             style={{width: "100%", height: "100vh", objectFit: "cover", opacity: 0.3}}/>
                    </item>
                    <item>
                        <img src={Slide2} alt={""}
                             style={{width: "100%", height: "100vh", objectFit: "cover", opacity: 0.3}}/>
                    </item>
                </Carousel>
            </Box>
            <Box mb={5}>
                <ScrollAnimation animateIn="fadeIn">
                    <Card style={{backgroundColor: "transparent"}} variant={""}>
                        <CardContent>
                            <Typography variant={"h3"} fontWeight={"900"} gutterBottom>
                                Molgorithm? Algorithm!
                            </Typography>
                            <Typography variant={"h6"} fontWeight={"light"}>
                                우리는 문제를 해결합니다. 알고리즘은.. <br/>
                            </Typography>
                        </CardContent>
                    </Card>
                </ScrollAnimation>
            </Box>
            <Box mb={5} id={"awards"}>
                <ScrollAnimation animateIn="fadeIn">
                    <Card style={{backgroundColor: "transparent"}} variant={""}>
                        <CardContent>
                            <Typography variant={"h3"} fontWeight={"900"} gutterBottom>
                                수상 경력
                            </Typography>
                            <Awards></Awards>
                        </CardContent>
                    </Card>
                </ScrollAnimation>

            </Box>
            <Grid container spacing={2} mb={5} columns={{ xs: 4, md: 12 }}>
                <Grid size={4}>
                    <ScrollAnimation animateIn="fadeIn">
                        <Card variant={"outlined"}>
                            <CardMedia component="img"
                                       image={Card1}></CardMedia>
                            <CardContent>
                                <Typography variant={"h6"} fontWeight={"bold"} gutterBottom>
                                    알고리즘 경시대회 출제 및 검수
                                </Typography>
                                <Typography>
                                    교내 경시대회를 출제하고 검수하였습니다.
                                </Typography>
                            </CardContent>
                        </Card>
                    </ScrollAnimation>
                </Grid>
                <Grid size={4}>
                    <ScrollAnimation delay={500} animateIn="fadeIn">
                        <Card variant={"outlined"}>
                            <CardContent>
                                <Typography variant={"h6"} fontWeight={"bold"} gutterBottom>
                                    TBD
                                </Typography>
                                <Typography>
                                    TBD
                                </Typography>
                            </CardContent>
                        </Card>
                    </ScrollAnimation>
                </Grid>
                <Grid size={4}>
                    <ScrollAnimation delay={1000} animateIn="fadeIn">
                        <Card variant={"outlined"}>
                            <CardContent>
                                <Typography variant={"h6"} fontWeight={"bold"} gutterBottom>
                                    TBD
                                </Typography>
                                <Typography>
                                    TBD
                                </Typography>
                            </CardContent>
                        </Card>
                    </ScrollAnimation>
                </Grid>
            </Grid>
        </div>
    );
};
export default HomePage;