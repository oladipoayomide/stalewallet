import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md/index";
import { AiOutlineClose } from "react-icons/ai/index";
import { MdKeyboardArrowUp } from "react-icons/md/index";
import { AnimatePresence, motion } from "framer-motion"
import { dropDownData, useScrollDirection } from "../constants";
import { useState } from "react";
import { slideIn, staggerChildren } from "../utils/motion";


const Header = ({ dropDown, handleDropDown }) => {
    const scrollDirection = useScrollDirection();

    const dropVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.2
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.2
            }
        }

    }

    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(prevState => !prevState)
        console.log(showMenu)
    }

    const [showFeatures, setShowFeatures] = useState(false)
    const toggleFeatures = () => {
        setShowFeatures(prevState => !prevState)
        console.log(showFeatures)
    }

    return (
        <div className={`container-fluid header sticky z-10  ${scrollDirection === "down" ? "-top-24" : "top-0"} bg-[#1e1e1e] relative`}>
            <nav className="py-4   flex flex-row items-center justify-between container" onMouseLeave={() => { handleDropDown('f') }}>
                <Link to="/"><img src="/img/logo-0.svg" alt="logo" className="w-[106px]" /></Link>

                <div className="nav-center hidden md:flex flex-row justify-around items-center">
                    <div className="dropDown relative"  >
                        <a onMouseEnter={() => handleDropDown('t')} href="#" className="flex flex-row items-center ">Features
                            <AnimatePresence>
                                <motion.span
                                >
                                    {!dropDown && <MdKeyboardArrowDown />}
                                    {dropDown && <MdKeyboardArrowUp />}
                                </motion.span>
                            </AnimatePresence>
                        </a>
                        <AnimatePresence>   {dropDown &&
                            <motion.div className=" min-w-[450px] md:w-[500px] lg:w-[700px] dropMenu dropdown-feature absolute bg-[#e2e6fd] rounded-[20px]  px-4 py-4 text-[#000000]  gap-2 grid  grid-cols-2 -left-[10px] top-[40px] z-[10]" onMouseEnter={() => { handleDropDown('t') }}
                                variants={dropVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                {dropDownData.map(item => (
                                    <div key={item.id} className="item py-2 px-2 rounded-md cursor-pointer hover:bg-[#E2E6E0]">
                                        <h3 className="mb-2 text-[#485fe6]">{item.title}</h3>
                                        <p>{item.body}</p>
                                    </div>
                                ))}
                            </motion.div>
                        }</AnimatePresence>
                    </div>
                    <Link className="mx-5" to="/about">About</Link>
                    <Link to="/faqs">FAQs</Link>
                </div>
                <button className="btn-1 hidden md:flex ">Join WaitList</button>
                <img src="/img/menu.svg" alt="menu" className="w-[35px] cursor-pointer block md:hidden " onClick={toggleMenu} />

                <AnimatePresence>
                    {showMenu && <div className="fixed top-0 right-0 h-[100%] w-[100%]  bg-[#1e1e1e73] menuLarge" >
                        <motion.div className="slideIn overflow-y-scroll float-right w-[70%] h-[100vh] z-[15] bg-[#1e1e1e] text-[#e2e6fd] px-4 py-4"
                            variants={slideIn("right", "tween", 0, 0.3)}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <div className="flex flex-col gap-3">
                                <div className="flex-row flex items-center justify-between">
                                    <a href="#"><img src="/img/logo-0.svg" alt="logo" className="w-[92px]" /></a>
                                    <AiOutlineClose onClick={toggleMenu} className="cursor-pointer" width="35px" />
                                </div>
                                <div className="flex-row flex items-center justify-between cursor-pointer outline-none" onClick={toggleFeatures}>
                                    <p>Features</p>
                                    {!showFeatures ? <MdKeyboardArrowDown /> :
                                        <MdKeyboardArrowUp />}
                                </div>
                                <AnimatePresence>

                                    {showFeatures && <motion.div className="flex flex-col gap-3"
                                        variants={staggerChildren}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        {
                                            dropDownData.map(item => (
                                                <motion.div
                                                    variants={staggerChildren.children}


                                                    key={item.id} className="each bg-[#e2e6fd] text-[#1e1e1e] px-2 py-3">
                                                    <h1 className="text-[#485fe6]"><strong>{item.title}</strong></h1>
                                                    <p><small>{item.body}</small></p>
                                                </motion.div>
                                            ))
                                        }
                                    </motion.div>}
                                </AnimatePresence>

                                <Link to="/about">About</Link>
                                <Link to="/faqs">Contact</Link>
                                <Link to="/faqs">FAQs</Link>
                                <button className="btn-1 max-w-[120px] ">Join WaitList</button>
                            </div>
                        </motion.div>
                    </div>}
                </AnimatePresence>
            </nav>
        </div>
    );
}

export default Header;