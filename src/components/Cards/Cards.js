import React from 'react';
import {Grid, CircularProgress} from '@material-ui/core';
import SingleCard from './card/SingleCard';
import Confirmed from '../../assets/images/confirmed.png';
import Deaths from '../../assets/images/death.png';
import Recovered from '../../assets/images/recovered.png';

const Cards = ({data}) => {
    if (!data.confirmed){
        return (
            <>
                <CircularProgress />
            </>
        )
    }
    const {confirmed, recovered, deaths, lastUpdate} = data
    return (
        <Grid container spacing={1}>
            <Grid item sm={12} lg={4} >
                <SingleCard
                    status='Confirmed'
                    statusNo={confirmed.value}
                    lastUpdated={lastUpdate}
                    image={Confirmed}
                />
            </Grid>
            
            <Grid item xs={12} lg={4}>
                <SingleCard 
                    status = 'Recovered'
                    statusNo={recovered.value}
                    lastUpdated={lastUpdate}
                    image={Recovered}
                />
            </Grid>

            <Grid item xs={12} lg={4}>
                <SingleCard 
                    status='Deaths'
                    statusNo={deaths.value}
                    lastUpdated={lastUpdate}
                    image={Deaths}
                />
            </Grid>
        </Grid>
    )
}

export default Cards
