import Socials from "../utils/Socials";
import StoreTemp from "../utils/StoreTemp";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>

            <div className="p-10 text-[#1e1e1e]  bg-[#e2e6fd] rounded-t-[15px] rounded-bl-[15px] rounded-br-[80px] md:rounded-br-[150px] border-[#485fe6] border-[0.1rem]  m-[5px] md:m-[40px] ">
                <div className="flex flex-row items-start row">
                    <div className="col-md-6 mb-10 md:mb-0 flex flex-col gap-4 col-12">
                        <img src="/img/logo-2.svg" alt="" className="w-[106px]" />
                        <p className="text-left w-[100%] sm:w-[70%]">Send, receive & swap your cryptocurrencies with ease, with zend wallet you can convert your giftcards to crypto instantly</p>
                        <Socials />
                        <div className="flex flex-row gap-4">
                            <StoreTemp store="Apple store" path="/img/apple.svg" />
                            <StoreTemp store="Google Play" path="/img/playstore.svg" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-10 md:mb-0  flex flex-col gap-4 col-12">
                        <Link to="#">About</Link>
                        <Link to="#">Products</Link>
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">Contact Us</Link>
                        <Link to="#">FAQs</Link>
                    </div>
                    <div className="col-md-3 flex flex-col gap-3 col-12">
                        <Link to="#">Terms and Condition</Link>
                        <Link to="#">Cookies Policy</Link>
                        <p>Lagos, Nigeria</p>
                    </div>
                </div>
                <p className="text-center mt-10">Zend wallet © 2022 Copyright. All right reserved</p>
                
            </div>
           
        </footer>
    );
}

export default Footer;