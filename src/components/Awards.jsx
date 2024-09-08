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
        삼성 대학생 프로그래밍 경진대회 : <b>김형진</b> - 4등상<br>
        LG 대학생 프로그래밍 경진대회 : <b>김태윤</b> - 장려상<br>
        SUAPC 2024 Summer : <b>PS:Endgame (김태윤,김형진,정용진)</b> - 1st<br>
        ICPC Asia Pacific : <b>SCC (김건우,김태윤,정용진)</b> - 21th
        `,
    },
    {
        label: '2023',
        description: `
        삼성 대학생 프로그래밍 경진대회 : <b>김태윤,김형진</b> - 4등상, <b>김건우</b> - 5등상      
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
                           <Typography dangerouslySetInnerHTML={{ __html: item.description }} lineHeight={2}>
                           </Typography>
                       </TimelineContent>
                   </TimelineItem>
               ) ;
            })}

        </Timeline>
    )
};

export default Awards;