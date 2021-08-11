import React from 'react';
import styled from 'styled-components';

function CurrentWeather() {
    return (
        <>
            <WeatherRound>Weather</WeatherRound>
        </>
    );
}

const WeatherRound = styled.div`
    background-color: yellow;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 20px ;
    width: 300px;
    height: 300px;
    border-radius: 50%;
`;


export default CurrentWeather;