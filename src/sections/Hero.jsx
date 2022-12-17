import { changingData } from "../constants";
import { useState, useEffect } from "react";
import styles from "../utils";
import StoreTemp from "../utils/StoreTemp";


const Hero = () => {
    const [headerText, setHeaderText] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            headerText < 4 ? setHeaderText(headerText + 1) : setHeaderText(1)

        }, 2500);
        return () => {
            clearInterval(interval);
        };
    });





    return (
        <div className="my-[30px] container text-[white] row flex flex-row justify-between items-center mx-auto ">
            <div className="col-12 col-md-7 flex flex-col mb-10 md:mb-0 gap-4 ">
                <div className="fire hidden sm:block bg-[#e2e6fd] px-2 py-1 rounded-[10px] max-w-[525px] text-[#485fe6]">
                    <p>Crypto withdrawal that does not fail, hang or give you headaches <img className="inline-block" src="/img/fire.svg" alt="fire" /></p>
                </div>
                <img className="w-[400px]" src="/img/coins.svg" alt="coins" />
                <p>
                    Send, receive & swap your cryptocurrencies with ease, with zend wallet you can convert your prepaid giftcards to crypto instantly
                </p>

                {changingData.map(item => (item.id === headerText &&<h1 key={item.id} className={` py-3 ${styles.h1}`}>
                    {item.content} <span className="text-[#485fe6]">{ item.span}</span>
                </h1>))}
                <div className="flex flex-row gap-4">
                    <StoreTemp store="Apple Store" path="/img/apple.svg"  />
                    <StoreTemp store="Google Play"  path="/img/playstore.svg" />
                </div>
                
            </div>
            <div className="col-12 col-md-3">
            <img src="/img/hero.webp" alt="phone" className="img-fluid block mx-auto"  />
            </div>
          
        </div >
    );
}

export default Hero;