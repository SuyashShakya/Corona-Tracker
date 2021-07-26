import React, {useEffect, useState} from 'react';
import { Cards, Charts, CountryPicker } from './components';
import {Container, Typography, Box} from '@material-ui/core'; 
import {fetchedData} from './Api';
import { CountryContext } from './context/countryContext';

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

  const handleCountryChange = async () => {
    const data = await fetchedData(country)
    setData(data);
  }

  return (
    <CountryContext.Provider
      value={{setCountry}}
    >
      <Container maxWidth='lg'>
        <Box padding={5}>
          <Typography variant='h5'>Covid-19 Tracker </Typography>
          <br />
          <CountryPicker handleCountryChange={handleCountryChange} />
          <Cards data={data}/>
          <Charts data={data} country={country}/>
        </Box>
      </Container>
    </CountryContext.Provider>
  )
}

export default App;