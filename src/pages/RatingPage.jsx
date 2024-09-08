import RatingChartComponent from "@/components/RatingChartComponent.jsx";
import {Box, Typography} from "@mui/material";

const RatingPage = () => {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            mt={20}
            maxWidth={"100%"}
        >
            <Typography variant={"h5"} fontWeight={"bold"}>Codeforces</Typography>
            <RatingChartComponent/>
        </Box>
    );
};

export default RatingPage;