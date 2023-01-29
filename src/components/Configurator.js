import Image from './Image';
import pic1 from '../Data/main-a-1.png';
import pic2 from '../Data/main-a-2.png';
import pic3 from '../Data/main-b-1.png';
import pic4 from '../Data/main-b-2.png';

import {useEffect, useState, useRef} from 'react';

const Configurator = () => {

    const [base, setBase] = useState(0);
    const [data, setData] = useState([]);

    const [imagePath, setImagePath] = useState('');
    const [mainButtons, setMainButtons] = useState([]);

    let buttons = useRef([]);
    let image = useRef('');

    useEffect(() => {

        //if(data.length === 0) {
        fetchData();

        buttons.current = data.filter(json => json.parentId === base);

    }, [base, data]);

    useEffect(() => {

        if(imagePath) {
            image.current = imagePath;
            console.log(image.current);
        }

    }, [imagePath]);


    async function fetchData() {
        await fetch(('https://api.jsonbin.io/v3/b/63d2f014c0e7653a0561a5ee'), {
            headers: {
                'X-Master-Key': '$2b$10$Vn0.5gJZc7vXb8MN9cx8ZuXTcSSY4DrPayaSlS/U96OrnSIDmYeU.',
            },
        })
            .then((response) => response.json())
            .then(json => {
                setData(json.record.second_level);
                //console.log(data);
                setMainButtons(json.record.base);
            },);
    }

    /*useEffect(() => {
        fetch("http://localhost:3000/")//fetch vrne promise, mormo počakat da se promise resolva
            .then((response) => response.json()) //spet dobis promise in pocakas ta response in ga pretvori v json obliko in sele potem upravljamo s tem jsonom
            .then(json => {
            console.log(json);
            //setData(json.filter(array => array.id == 1)); //če je id = 1 shranim bas-a
                // console.log(data);
        },);
    },[])*/

    function showImage(path) {
        setImagePath(path);
    }

    return (
        <div className="mainContainer">

            { data.length > 0 &&
                <div className="container">

                    {mainButtons.map(function (button) {
                        return (
                            <button key={button.title} className={`${base === button.id ? " selected" : ""}`}
                                    onClick={() => {setBase(button.id); showImage(button.imageSource)}}>{button.title}</button>
                        )
                    })}
                </div>
            }

            { buttons.current.length > 0 &&

                <div className="container">
                    {buttons.current.map(function (button) {
                        return (
                            <button key={button.title} className={`${image.current === button.imageSource ? " selected" : ""}`}
                                    onClick={() => {showImage(button.imageSource)}}>{button.title}</button>
                        )
                    })}
                </div>
            }

            <Image source={image.current}/>

        </div>
    )
}
export default Configurator;