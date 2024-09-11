import {Accordion, AccordionDetails, AccordionSummary, Box, Tab, Tabs, Typography} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown.js";
import * as PropTypes from "prop-types";
import { Link } from '@mui/material';
import {Image} from "@mui/icons-material";

function CustomTabPanel(props) {
    return null;
}

CustomTabPanel.propTypes = {
    index: PropTypes.number,
    children: PropTypes.node
};
const CurriculumPage = () => {
    return (
        <>
            <Box mt={20} mb={5}>
                <Typography variant={"h2"} fontWeight={"bold"} gutterBottom>고급반</Typography>
                <Typography variant={"h4"} gutterBottom><b>1주차</b> - 함수</Typography>
                <Box display={"flex"} gap={"5px"} mb={1}>
                    <Link
                        href={"https://molgorithm.notion.site/1-4403e8ba5e2541ebb6d5fa90e218db8a"}
                    >
                        <Typography variant={"h6"}>강의 내용</Typography>
                    </Link>
                    <Link
                        href={"https://molgorithm.notion.site/1-4403e8ba5e2541ebb6d5fa90e218db8a"}
                    >
                        <Typography variant={"h6"}>강의 자료</Typography>
                    </Link>
                </Box>
                <Box display={"flex"} gap={"10px"}>
                    <Link href={"https://www.acmicpc.net/problem/10950"}>
                        <img width="20px" src={"https://static.solved.ac/tier_small/1.svg"}></img>
                    </Link>
                    <Link href={"https://www.acmicpc.net/problem/10950"}>
                        <img width="20px" src={"https://static.solved.ac/tier_small/2.svg"}></img>
                    </Link>
                    <Link href={"https://www.acmicpc.net/problem/10950"}>
                        <img width="20px" src={"https://static.solved.ac/tier_small/2.svg"}></img>
                    </Link>
                    <Link href={"https://www.acmicpc.net/problem/10950"}>
                        <img width="20px" src={"https://static.solved.ac/tier_small/4.svg"}></img>
                    </Link>
                    <Link href={"https://www.acmicpc.net/problem/10950"}>
                        <img width="20px" src={"https://static.solved.ac/tier_small/4.svg"}></img>
                    </Link>
                </Box>
            </Box>
        </>
    );
};

export default CurriculumPage;