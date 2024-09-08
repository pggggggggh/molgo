import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {Typography} from "@mui/material";
import {timelineContentClasses, timelineItemClasses} from "@mui/lab";

const data = [
    {
        label: '2024',
        description: `
        <b>김형진</b> - SCPC 4등상<br>
        <b>김태윤</b> - LGCPC 장려상<br>
        <b>SCC (김건우,김태윤,정용진)</b> - ICPC Asia Pacific Championship 21th<br>
        <b>PS:Endgame (김태윤,김형진,정용진)</b> - ICPC World Finals 진출
        `,
    },
    {
        label: '2023',
        description: `
        <b>김태윤,김형진</b> - SCPC 4등상<br>
        <b>김건우</b> - SCPC 5등상<br>
        
        `
    },
    {
        label: '2022',
        description: `TBD`,
    },
];

const Awards = () => {
    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
        >
            {data.map((item,i)=>{
               return (
                   <TimelineItem key={i}>
                       <TimelineSeparator>
                           <TimelineDot />
                           <TimelineConnector />
                       </TimelineSeparator>
                       <TimelineContent>
                           <Typography variant="h6" component="span">
                               {item.label}
                           </Typography>
                           <Typography dangerouslySetInnerHTML={{ __html: item.description }}>
                           </Typography>
                       </TimelineContent>
                   </TimelineItem>
               ) ;
            })}

        </Timeline>
    )
};

export default Awards;