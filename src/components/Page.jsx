import DoThis from "../sections/DoThis";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Qualities from "../sections/Qualities";
import Testimonies from "../sections/Testimonies";
import Header from "./Header";
import { useState } from "react";
import { useCycle } from "framer-motion";
import KeyFrame from "../utils/KeyFrame";

const Page = () => {

    const [arrowHover, cycleArrow] = useCycle("nonVisible", "visible")

    const [dropDown, setDropDown] = useState(false);
    const handleDropDown = (input) => {
        if (input === 't') {
            setDropDown(true)
            cycleArrow()
        } else if (input === 'f') {
            setDropDown(false)
            cycleArrow()
        }

    }
    return (
        <div className="">
            <Header arrowHover={arrowHover} dropDown={dropDown} handleDropDown={handleDropDown} setDropDown={setDropDown} />
            <Hero />
            <KeyFrame
                text="TRX $0.06329000 (+2.30%)"
                text1=" ETH $1,620.09 (+5.82%)"
                text2="GAL $2.39 (-6.86%)"
                text3="DOT $6.78 (+5.62%)"
                text4=" DOGE $0.12 (+0.13%)"
                
            />
            <Qualities />
            <DoThis />
            <Testimonies />
            <Footer />
        </div>
    );
}

export default Page;