import { qualities } from "../constants";

const Qualities = () => {
    return (<div className=" px-[20px] sm:px-0 my-5 container qualities grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
       {
        qualities.map((item)=>(
            <div className="each flex flex-col gap-3 py-2" >
                <img src={item.img} alt="img" className="w-[35px]" />
                <h2><strong>{item.title}</strong></h2>
                <p>{item.body}</p>
            </div>
        ))
       }
    </div>);
}

export default Qualities;