import React, {useEffect, useState} from 'react';
import { Cards, Charts, CountryPicker } from './components';
import {Container, Typography} from '@material-ui/core'; 
import {fetchedData} from './Api';

const App = () => {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {

    const fetchMyAPI = async () => {
      const data = await fetchedData();
      setData(data);
    };
    fetchMyAPI();
  }, [])

  const handleCountryChange = async (country) => {
    const data = await fetchedData(country)
    setData(data);
    setCountry(country);
  }
  return (
    <Container maxWidth='lg'>
      <Typography variant='h5'>Covid-19 Tracker </Typography>
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Cards data={data}/>
      <Charts data={data} country={country}/>
      
    </Container>
  )
}

export default App;