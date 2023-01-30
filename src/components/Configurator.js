import Image from './Image';

import {useEffect, useState} from 'react';

const Configurator = () => {

    const [base, setBase] = useState(0);
    const [data, setData] = useState([]);
    const [imagePath, setImagePath] = useState('');
    const [mainButtons, setMainButtons] = useState([]);
    const [buttonSecond, setButtonSecond] = useState([]);

    useEffect(() => {

        fetchData();
        setButtonSecond(data.filter(json => json.parentId === base));

    }, [base, data]);


    async function fetchData() {
        await fetch(('https://api.jsonbin.io/v3/b/63d7951cebd26539d06e4163'), {
            headers: {
                'X-Master-Key': '$2b$10$GIkkNzSqy0eBUPhcEsMvjeg9JcYRUfUWAf/eGjNDEbE77qVlzRhym',
            },
        })
            .then((response) => response.json())
            .then(json => {
                setData(json.record.second_level);
                setMainButtons(json.record.base);
            },);
    }

    return (
        <div className="mainContainer">

            { data.length > 0 &&
                <div className="container">
                    {mainButtons.map(function (button) {
                        return (
                            <button key={button.title} className={`${base === button.id ? " selected" : ""}`}
                                    onClick={() => {setBase(button.id); setImagePath(button.imageSource)}}>{button.title}</button>
                        )
                    })}
                </div>
            }

            { buttonSecond.length > 0 &&

                <div>
                    <div className="container">
                        {buttonSecond.map(function (button) {
                            return (
                                <button key={button.title} className={`${imagePath === button.imageSource ? " selected" : ""}`}
                                        onClick={() => {setImagePath(button.imageSource)}}>{button.title}</button>
                            )
                        })}
                    </div>

                    <Image source={imagePath}/>

                </div>
            }
        </div>
    )
}
export default Configurator;