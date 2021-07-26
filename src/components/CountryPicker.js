import React, {useState, useEffect, useContext} from 'react'
import {MenuItem, FormHelperText, FormControl, Select, Typography, CircularProgress} from '@material-ui/core';
import {fetchCountryList} from '../Api';
import {CountryContext} from '../context/countryContext';

function CountryPicker({ handleCountryChange }) {
    const [countryList, setCountryList] = useState([])
    const {setCountry} = useContext(CountryContext)
    useEffect(() => {
        const countryList = async () => {
            const data = await fetchCountryList();
            setCountryList(data)
        }
        countryList(); 
    }, [])
    
    const {countries} = countryList;

    if(!countries){
        return (
            <>
                <CircularProgress />
                <br />
            </>
        )
    }

    return (
        <>
            <Typography variant = 'body1'>Select Country</Typography>
            <FormControl >
                <Select
                    defaultValue=''
                    style={{width: 250}}
                    onChange={(e) => {
                        handleCountryChange()
                        setCountry(e.target.value)
                    }} 
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {countries.map((item, index) => <MenuItem key={`item-name-${index}`} value={item.name}>{item.name}</MenuItem>)}
                </Select>
                <FormHelperText>Choose a Country from the Dropdown</FormHelperText>
            </FormControl>
        </>
    )
}

export default CountryPicker
