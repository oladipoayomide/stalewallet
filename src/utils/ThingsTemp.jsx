import styles from ".";
import StoreTemp from "./StoreTemp";
import { motion } from "framer-motion"
import { slideVariants } from "./motion";

const ThingsTemp = ({ title, body, path, direction,size }) => {

   


    return (
        <div className={`row items-center flex flex-row ${direction} my-3 px-[15px] sm:px-0`}>
            <div className="col-12 col-md-5 flex flex-col mb-10 md:mb-0 lg:mb:0 gap-5">
                <motion.h2 className={styles.h2}
                    variants={slideVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false}}
                >{title}</motion.h2>
                {body && <p>{body}</p>}
                <div className="flex flex-row gap-4">
                    <StoreTemp store="Apple Store" path="/img/apple.svg" />
                    <StoreTemp store="Google Play" path="/img/playstore.svg" />
                </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-12 mx-auto col-md-5 ">
                <img src={path} alt="a pic" width={size} className="img-fluid " />
            </div>
        </div>
    );
}

export default ThingsTemp;