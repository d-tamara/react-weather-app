import Location from './Location';
import {useEffect, useState} from "react";

const Weather = () => {

    const [cityInfo, setCityInfo] = useState([]);
    const [chosenCity, setChosenCity] = useState([]); //v tem arrayu lat in long
    const [chosenButton, setChosenButton] = useState(0);
    const [units, setUnits] = useState(null);

    useEffect(() => {

        fetchLocalData();

    }, []); //prazen deps, izvede se ob prvem renderingu

    async function fetchLocalData() {
        await fetch(('db.json'), {
        })
            .then((response) => response.json())
            .then(json => {
                setCityInfo(json.city);
                setUnits(json.units[0]);
            },);
    }


    return (
            <div className="container">
                { cityInfo.length > 0 &&
                    <div className="buttons">
                        {cityInfo.map(function (button) {
                            return (
                                <button key={button.name} className={`${chosenButton === button.id ? " selectedButton" : ""}`}
                                        onClick={() => {setChosenCity([button.latitude, button.longitude]);
                                        setChosenButton(button.id)}}>{button.name}</button>
                            )
                        })}
                    </div>
                }


            <div className="oneCard">
                {chosenCity.length > 0 &&
                    <Location coordinates={chosenCity} units={units}/>
                }
            </div>

        </div>
    )
}
export default Weather;