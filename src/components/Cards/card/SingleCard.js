import React from 'react';
import {Box, Typography} from '@material-ui/core';
import CountUp from 'react-countup';

const SingleCard = ({status, lastUpdated, statusNo, image}) => {
    return (
        <Box display='flex' flexDirection='column' m={5} p={5} boxShadow={1} minWidth={220} alignItems='center'>
            <img src={image} alt='' height={100} width={100}/>
            <Typography variant='body2' color='secondary'>
                <u>No of {status} from Covid-19</u>
            </Typography>
            <Typography variant="h6" color="secondary">
                   {status}:
            </Typography>
            <Typography variant="subtitle1" color="primary">
                <b><CountUp start={0} end={statusNo} duration={2.75} separator="," /></b>
            </Typography>
            <Typography variant="h6" color="secondary" component="p">
                Last Updated: 
            </Typography>
            <Typography variant="subtitle1">
                   <b>{new Date(lastUpdated).toDateString()}</b>
            </Typography>
        </Box>    
    )
}

export default SingleCard