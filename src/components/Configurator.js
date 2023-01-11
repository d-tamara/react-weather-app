import Image from './Image';
import pic1 from '../Data/main-a-1.png';
import pic2 from '../Data/main-a-2.png';
import pic3 from '../Data/main-b-1.png';
import pic4 from '../Data/main-b-2.png';

import React from "react";

const Configurator = () => {

    const [base, setBase] = React.useState(0); //brez tega mi ni spreminjal stata base
    const [image, setImage] = React.useState(-1);

    let arrayOfImages = [pic1, pic2, pic3, pic4];

    return (
        <div className={"mainContainer"}>
            <div className={"container"}>
                <button className={`${base === 1 ? " selected" : ""}`}
                        onClick={() => {setBase(1); setImage(0)}}>Zvezdasto podnožje</button>

                <button className={`${base === 2 ? " selected" : ""}`}
                        onClick={() => {setBase(2); setImage(2)}}>Okroglo podnožje</button>
            </div>

            {base === 1 &&
                <div className={"container"}>
                    <button className={`${image === 0 ? " selected" : ""}`}
                            onClick={() => {setImage(0)}}>Koleščki</button>

                    <button className={`${image === 1 ? " selected" : ""}`}
                            onClick={() => {setImage(1)}}>Gumijaste nogice</button>
                </div>
            }
            {base === 2 &&
                <div className={"container"}>
                    <button className={`${image === 2 ? " selected" : ""}`}
                            onClick={() => {setImage(2)}}>Z naslonjalom</button>

                    <button className={`${image === 3 ? " selected" : ""}`}
                            onClick={() => {setImage(3)}}>Brez naslonjala</button>
                </div>
            }

            <Image source={arrayOfImages[image]}/>

        </div>
    )
}
export default Configurator;