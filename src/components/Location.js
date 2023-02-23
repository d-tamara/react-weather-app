import {useEffect, useState, useRef} from 'react';

const Location = (props) => {

    const [temperature, setTemperature] = useState([]);
    const [rain, setRain] = useState([]);
    const [humidity, setHumidity] = useState([]);
    const [pressure, setPressure] = useState([]);

    useEffect(() => {

        fetchWeatherData();

    }, [props]);


    async function fetchWeatherData() {
        await fetch((`https://api.open-meteo.com/v1/forecast?latitude=${props.coordinates[0]}&longitude=${props.coordinates[1]}&hourly=temperature_2m,relativehumidity_2m,rain,surface_pressure`), {
        })
            .then((response) => response.json())
            .then(json => {

                setTemperature((json.hourly.temperature_2m).slice(0,4));
                setRain((json.hourly.rain).slice(0,4));
                setHumidity((json.hourly.relativehumidity_2m).slice(0,4));
                setPressure((json.hourly.surface_pressure).slice(0,4));

            },);
    }

    return (
                <div className="container">
                    <div className="locationCard">

                        <div>
                            <p></p>
                            <p className="first-row">Zdaj:</p>
                            <p className="first-row">Čez eno uro:</p>
                            <p className="first-row">Čez dve uri:</p>
                            <p className="first-row">Čez tri ure:</p>
                        </div>

                        <div>
                            <p className="first-col">Temperatura</p>
                            {temperature.map(function (temp) {
                                return (
                                    <p>{temp} {props.units.temperature}</p>
                                )
                            })}
                        </div>

                        <div>
                            <p className="first-col">Dež</p>
                            {rain.map(function (temp) {
                                return (
                                    <p>{temp} {props.units.rain}</p>
                                )
                            })}
                        </div>

                        <div>
                            <p className="first-col">Vlaga</p>
                            {humidity.map(function (temp) {
                                return (
                                    <p>{temp} {props.units.humidity}</p>
                                )
                            })}
                        </div>

                        <div>
                            <p className="first-col">Pritisk</p>
                            {pressure.map(function (temp) {
                                return (
                                    <p>{temp} {props.units.pressure}</p>
                                )
                            })}
                        </div>


                    </div>
                </div>
    )
}
export default Location;