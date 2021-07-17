import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchedData = async (country) => {
    let countryUrl = url
    if (country) {
        countryUrl = `${url}/countries/${country}`
    }
    try {
        const {data: { confirmed, deaths, recovered, lastUpdate}} = await axios.get(countryUrl);
        return {confirmed, deaths, recovered, lastUpdate}
    }catch(error) {
        return error
    }
}

export const fetchCountryList = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return {countries}
    } catch(error) {
        return error
    }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};
    
   