import React from 'react';
import moment from 'moment';

export default function DateTimePretty (props){
    const {date, DateTime} = props;
    const relativeTime = moment(date.split(' ')[0], "YYYYMMDD").fromNow()
        return(
            <>
            <DateTime date={relativeTime}/>
            </>
        )
   
}


