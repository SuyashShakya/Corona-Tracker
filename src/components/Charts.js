import React, {useEffect, useState} from 'react';
import {fetchDailyData} from '../Api'
import { Line, Bar } from 'react-chartjs-2'

function Charts({data:{confirmed, recovered, deaths}, country}) {
    const [dailyData, setDailyData] = useState({}) 

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchDailyData();
            setDailyData(data)
        }
        fetchData();
    }, [])

    const LineChart = () => (
        dailyData[0] ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
              datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: 'green',
                fill: true,
              }, {
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              }
              ],
            }}
          />
        ) : null
    );

    const BarChart = () =>(
        confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [confirmed.value, recovered.value, deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${country}` },
            }}
          />
        ) : null
    );
    return (
        <>
            {country ? <BarChart /> : <LineChart />}
        </>
    )
}

export default Charts
