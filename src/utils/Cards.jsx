import { motion } from "framer-motion"
const Cards = ({ img, body, name }) => {
    const cardVariants = {

        visible: {
            rotate: "2deg",
            scale: 1.05,
            transition: {
                duration: 0.3,
                ease: 'easeOut'
            }
        }
    }

    return (
        <motion.div className="   card flex flex-col gap-3 rounded-[20px] bg-[white] text-left px-4 py-4  text-[#1e1e1e]"
            variants={cardVariants}
            whileHover="visible"
        >
            <img src={img} alt="card-img" width="46px" />
            <div className="flex flex-row gap-1 items-center">
                <img src="/img/starIcon.svg" alt="stars" width="20px" />
                <img src="/img/starIcon.svg" alt="stars" width="20px" />
                <img src="/img/starIcon.svg" alt="stars" width="20px" />
                <img src="/img/starIcon.svg" alt="stars" width="20px" />
                <img src="/img/starIcon.svg" alt="stars" width="20px" />
            </div>
            <p>{body}</p>
            <p className="text-xs">{name}</p>

        </motion.div>
    );
}

export default Cards;