import Header from "./components/Header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import {Box, Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {useEffect} from "react";
import FAQPage from "@/pages/FAQPage.jsx";
import RatingPage from "@/pages/RatingPage.jsx";
import CurriculumPage from "@/pages/CurriculumPage.jsx";

const theme = createTheme({
    typography: {
        fontFamily: 'Noto Sans KR',
        button: {
            textTransform: 'none'
        }
    },
    palette: {
        mode: 'dark',
        background: {
            default: "#0b132b",
            paper:"#0b132b"
        },
    }
})

function App() {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);

    return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <CssBaseline/>
                    <Header/>
                    <Container maxWidth={"lg"}>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/faq" element={<FAQPage/>}/>
                            <Route path="/rating" element={<RatingPage/>}/>
                            <Route path="/curriculum" element={<CurriculumPage/>}/>
                        </Routes>
                    </Container>
                    <Footer/>
                </BrowserRouter>
            </ThemeProvider>
    );
}

export default App
