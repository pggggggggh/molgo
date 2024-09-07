import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const FAQPage = () => {
    return (
        <>
            <Box mt={20}
            >
                <Typography variant={"h2"} fontWeight={"bold"} gutterBottom>FAQ</Typography>
                <Accordion sx={{width:"100%"}}>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        저 못하는데 들어가도 되나요?
                    </AccordionSummary>
                    <AccordionDetails>
                        좀 오세요.
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{width:"100%"}}>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        SCPC 상타면 뭐가 좋나요?
                    </AccordionSummary>
                    <AccordionDetails>
                        좋습니다
                    </AccordionDetails>
                </Accordion>
            </Box>
        </>
    );
};

export default FAQPage;