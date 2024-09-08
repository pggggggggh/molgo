import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const FAQPage = () => {
    return (
        <>
            <Box mt={20} mb={5}>
                <Typography variant={"h2"} fontWeight={"bold"} gutterBottom>FAQ</Typography>
                <Accordion sx={{width:"100%"}}>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        실력이 부족한데 활동할 수 있나요?
                    </AccordionSummary>
                    <AccordionDetails>
                        모르고리즘은 일반부와 대회부로 나누어 활동합니다. 자신에게 맞는 부서로 지원하면 분명 도움이 될 것입니다.
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{width:"100%"}}>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        알고리즘을 잘하면 취업에 유리한가요?
                    </AccordionSummary>
                    <AccordionDetails>
                        TBD
                    </AccordionDetails>
                </Accordion>
            </Box>
        </>
    );
};

export default FAQPage;