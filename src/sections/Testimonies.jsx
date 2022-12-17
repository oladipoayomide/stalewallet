import { testimoniesData } from "../constants";
import Cards from "../utils/Cards";

const Testimonies = () => {
    return (
        <div className="testimonies py-20 container-fluid bg-[#485fe6] my-10 xs:px-10 md:px-[3.5rem]   px-[25px] sm:px-0">
            <div className=" text-center">
                <h1 className="h1 font-bold text-5xl">
                    Testimonies
                </h1>
                <p className="text-xs">What customers are saying about us</p>
            </div>
            <div className="testimony grid xs:grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
                {
                    testimoniesData.map(item => {
                        return (
                            <Cards
                                img={item.img}
                                body={item.body}
                                name={item.name}
                            />
                        )
                    })
                }
            </div>
        </div>);
}

export default Testimonies;