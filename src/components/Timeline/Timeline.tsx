import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import './Timeline.css';
import { Typography } from '@material-ui/core';

type TimelineProps = {
    title?: string;
};

export default ({
    title = 'Header',
    WorkIcon = 'div',
    children = <div></div>,
}: {
    title?: string;
    WorkIcon?: any;
    children?: any;
}) => {
    return (
        <Timeline className="timeline">
            {/* header item */}
            <TimelineItem className="timeline_firstItem">
                <TimelineSeparator>
                    <TimelineDot className="timeline_dot_header">{<WorkIcon />}</TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6" className="timeline_header">
                        {title}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            {/* remaining item */}

            {children}

            <TimelineItem>
                <CustomTimeLineSeparator />
                <TimelineContent>Attr</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};

export const CustomTimeLineSeparator = () => (
    <TimelineSeparator className="separator_padding">
        <TimelineDot className="timeline_dot" />
        <TimelineSeparator />
    </TimelineSeparator>
);
