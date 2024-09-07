import {Box, Card, CardContent, CardMedia, Grow, Typography} from "@mui/material";
import {Grid2 as Grid} from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import {useEffect} from "react";
import CountUp from "react-countup";

const HomePage = () => {
    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                flexDirection="column"
                mb={5}
            >
                <ScrollAnimation animateIn="fadeIn">
                    <Box
                        display={"flex"}
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Typography variant="h1" fontWeight={"100"} mb={2}>
                            Molgorithm
                        </Typography>
                        <Typography><CountUp end={3267}/> problems solved</Typography>
                    </Box>
                </ScrollAnimation>
            </Box>
            <Box mb={5}>
                <ScrollAnimation animateIn="fadeIn">
                    <Card style={{backgroundColor: "transparent"}} variant={""}>
                        <CardContent>
                            <Typography variant={"h3"} fontWeight={"900"} gutterBottom>
                                Molgorithm? Algorithm!
                            </Typography>
                            <Typography variant={"h6"} fontWeight={"light"}>
                                우리는 알고리즘 문제를 풉니다. 어쩌구 저쩌구.. <br/>
                                레드가 둘이나 있습니다.
                            </Typography>
                        </CardContent>
                    </Card>
                </ScrollAnimation>
            </Box>
            <Grid container spacing={2} mb={5}>
                <Grid size={4}>
                    <ScrollAnimation animateIn="fadeIn">
                        <Card variant={"outlined"}>
                            <CardMedia component="img"
                                       image={"https://cf-ea.everytime.kr/attach/655/62632268/everytime-1699347433083.jpg?Expires=1725725117&Key-Pair-Id=APKAICU6XZKH23IGASFA&Signature=nt35l6p~wH38pUjF8vhAQjD2LdbPSKkLyBbsZw7xka0Gb24Re6I0EUw~h6j09PNtWUSyAt6Onlz8S3at3Pp0lpXDz3xB-iffwvNBDEWfcpXLmnehBAIAAH~hXMXugVviuIDxMDDci4TN2F47LnKa87jZji5By4JtX~DyAvcsgZ7jUHS-n8YN5TwInj6gmUDneyuHTb1GSKYBNyh9bHaQirqNTd1rXGPxAyP3dZBal0juRq1TvSOYv9b4bBVhPFRZWFjho03odUA4TiYdZgLU1KvlhMJKhQ5QKeehv4E0V7WpC64J2nT8hBQGjMS5nPn4W-Xg7ft2uThcmTcuNBZClA__"}></CardMedia>
                            <CardContent>
                                <Typography variant={"h6"} fontWeight={"bold"} gutterBottom>
                                    알고리즘 경시대회 출제 및 검수
                                </Typography>
                                <Typography>
                                    어려우니까 풀지 마세요.
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
                                    뭐 적지
                                </Typography>
                                <Typography>
                                    뭐 적지
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
                                    뭐 적지
                                </Typography>
                                <Typography>
                                    뭐 적지
                                </Typography>
                            </CardContent>
                        </Card>
                    </ScrollAnimation>
                </Grid>
            </Grid>
        </>
    );
};
export default HomePage;